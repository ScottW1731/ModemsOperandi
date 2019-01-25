# source idea: https://medium.freecodecamp.org/better-web-scraping-in-python-with-selenium-beautiful-soup-and-pandas-d6390592e251
# ** Supporting links **
# https://stackoverflow.com/questions/42524114/how-to-install-geckodriver-on-a-windows-system
# https://blog.softhints.com/python-read-validate-and-import-csv-json-file-to-mysql/#JSON

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
import os
import requests
import pymysql
import json
#from tabulate import tabulate

base = "https://pcpartpicker.com"
# connect to MySQL
con = pymysql.connect(host='localhost', user='root',
                      passwd='root', db='pc_builder')
cursor = con.cursor()

# Get all prefab urls that haven't been visited yet
def getPrefabs():
    prefabUrls = []
    cursor.execute("select * from prefabs")
    result = cursor.fetchall()
    # print (result)
    for x in result:
        # print(x[2])
        prefabUrls.append(x[2])
    return prefabUrls


def findStub(searchUrl):
    source_code = requests.get(searchUrl)
    plain_text = source_code.text
    soup = BeautifulSoup(plain_text, features="html.parser")
    for div in soup.findAll('div', {'class': 'block'}):
        links = div.select('h2 a')
        if(len(links) > 0):
            stub = links[0].get('href')
            print("stub: " + stub)
            return stub


def getSoup(url):
    source_code = requests.get(url)
    plain_text = source_code.text
    return BeautifulSoup(plain_text, features="html.parser")


def extract(permalink):

    if ("/b/" in permalink):
        stub = findStub(permalink)
        embeddedUrl = base+stub
        # print("found embedded url: " + embeddedUrl)
        driver.get(embeddedUrl)
    else:
        # print("found list url: " + permalink)
        driver.get(permalink)

    # After open:
    button = driver.find_element_by_id("export_markup_html")
    button.click()

    soup = BeautifulSoup(driver.page_source, 'lxml')
    # soup = BeautifulSoup(driver.page_source, features="html.parser")

    table = soup.find('table', {'class', 'manual-zebra'})
    div = soup.find('div', {'class', 'details'})

    img_urls = [x['src'] for x in div.find_all('img', {'class', ''})]
    print(img_urls)
    print(len(img_urls))

    # Giving the HTML table to pandas to put in a dataframe object
    df = pd.read_html(str(table), header=0)[0]  # only one here
    num_cols = len(df.columns)
    print('num cols: ', num_cols)

    # remove rows like rebates and shipping whose 'Selection' column will be NaN:
    df = df[pd.notnull(df['Selection'])]

    # add new empty column for image urls:
    df.insert(num_cols, "image_url", '')

    # print(df)

    # inject our new images into their proper rows (by index):
    i = 0
    for index, row in df.iterrows():
        print('index: ', index)
        df.at[index, 'image_url'] = img_urls[i]
        i += 1

    # df["Base"][0] = "I'm the prettiest unicorn!"
    print(df)

    # Store the dataframe in a list
    datalist.append(df)
    # print(datalist)


print("setting up driver...")
driver = webdriver.Firefox()
print("waiting...")
driver.implicitly_wait(30)

datalist = []  # empty list
saveFileName = "build_data.json"


def download_builds():
    for permalink in links:
        extract(permalink)

    driver.quit()
    # combine all pandas dataframes in the list into one big dataframe
    result = pd.concat([pd.DataFrame(datalist[i])
                        for i in range(len(datalist))], ignore_index=True)

    # convert the pandas dataframe to JSON
    json_records = result.to_json(orient='records')

    path = os.getcwd()
    savePath = path+"\\" + saveFileName
    print('path: ' + savePath)
    fs = open(savePath, "w")
    fs.write(json_records)
    fs.close()


# do validation and checks before insert:
def validate_string(val):
    if val != None:
        if type(val) is int:
            return str(val).encode('utf-8')
        else:
            return val

# read JSON file & store to mysql db:
def store_to_db():
    path = os.getcwd()
    savePath = path+"\\" + saveFileName

    json_data = open(savePath).read()
    json_obj = json.loads(json_data)

    skip_pattern = re.compile('^.*From parametric.*')

    # parse json data to SQL insert
    for i, item in enumerate(json_obj):

        name = validate_string(item.get("Selection", None))
        cost = validate_string(item.get("Price", None))

        if name == None:  # or cost == None
            continue

        m = skip_pattern.match(name)
        if(m != None):
            continue

        if cost == None:
            cost = validate_string(item.get("Base", None))

        # TODO: IFF no price can be found at all, click the link and extract price(s)
        if cost != None:
            cost = cost.replace("$", "")

        # TODO: Make this a transaction over an array of objects to insert
        cursor.execute(
            "INSERT INTO parts (name, cost) VALUES (%s, %s)", (name, cost))

    con.commit()
    con.close()


### MAIN ###

links = getPrefabs()
download_builds()
store_to_db()

print('done')
