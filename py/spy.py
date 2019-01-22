# search: https: // pcpartpicker.com/b/Qf4qqs
# the embed(reroute): <a href="/list/7prrXP">View full price breakdown</a>

from bs4 import BeautifulSoup
import mysql.connector
import requests
import time
import urllib.request

print('running PC Part Picker spyder...')

# find the stub that will give us the raw html for a build:


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


def checkUrl(url): return urllib.request.urlopen(url).getcode() == 200


def getSoup(url):
    source_code = requests.get(url)
    plain_text = source_code.text
    return BeautifulSoup(plain_text, features="html.parser")


def extract(permalink):
    stub = findStub(permalink)
    nextUrl = base+stub
    print("next: " + nextUrl)
    soup = getSoup(nextUrl)
    # todo: switch between tag ids:
    a_tag = soup.find('a', {"id": "export_markup_plaintext"})
    href = a_tag.get('href')
    print(a_tag)
    print(href)
    textarea = soup.findAll('textarea', {"id": "markup_text"})[0]
    print(textarea)


# def click(img):
#     if img:
#         a_tag = img[0].parent
#         href = a_tag.get('href')
#         print (href)


connection = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="birman",
    auth_plugin='mysql_native_password',
    port=3306,
    database="pc_builder"
)

# print(connection)
# cursor = connection.cursor()
# cursor.execute("SHOW DATABASES")
# for db in cursor:
#     print(db)

start = time.time()

#### MAIN ####
base = "https://pcpartpicker.com"
prefabNum = "Qf4qqs"
permalink = base + "/b/" + prefabNum
print("permalink URL: " + permalink)

extract(permalink)

end = time.time()
print(end-start)
