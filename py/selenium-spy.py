# source idea: https://medium.freecodecamp.org/better-web-scraping-in-python-with-selenium-beautiful-soup-and-pandas-d6390592e251
# support: https://stackoverflow.com/questions/42524114/how-to-install-geckodriver-on-a-windows-system

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
from tabulate import tabulate
import os
import requests

base = "https://pcpartpicker.com"
links = ["https://pcpartpicker.com/b/Qf4qqs",
         "https://pcpartpicker.com/list/xtnFMZ"]


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


print("setting up driver...")
driver = webdriver.Firefox()
print("waiting...")
driver.implicitly_wait(30)

datalist = []  # empty list


def extract(permalink):

    if ("/b/" in permalink):
        stub = findStub(permalink)
        embeddedUrl = base+stub
        print("found embedded url: " + embeddedUrl)
        driver.get(embeddedUrl)
    else:
        print("found list url: " + permalink)
        driver.get(permalink)

    # After open:
    button = driver.find_element_by_id("export_markup_html")
    button.click()

    soup = BeautifulSoup(driver.page_source, 'lxml')
    # soup = BeautifulSoup(driver.page_source, features="html.parser")

    table = soup.find_all('table')[0]

    # Giving the HTML table to pandas to put in a dataframe object
    df = pd.read_html(str(table), header=0)

    # Store the dataframe in a list
    datalist.append(df[0])


for permalink in links:
    extract(permalink)

driver.quit()

# combine all pandas dataframes in the list into one big dataframe
result = pd.concat([pd.DataFrame(datalist[i])
                    for i in range(len(datalist))], ignore_index=True)


# convert the pandas dataframe to JSON
json_records = result.to_json(orient='records')

path = os.getcwd()
fs = open(path+"\\build_data.json", "w")
fs.write(json_records)
fs.close()
