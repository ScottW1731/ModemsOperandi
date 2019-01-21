# search: https: // pcpartpicker.com/b/Qf4qqs
# the embed(reroute): <a href="/list/7prrXP">View full price breakdown</a>

import mysql.connector
from bs4 import BeautifulSoup
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
            return stub


def checkUrl(url): return urllib.request.urlopen(url).getcode() == 200


def getSoup(url):
    source_code = requests.get(url)
    plain_text = source_code.text
    return BeautifulSoup(plain_text, features="html.parser")


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

stub = findStub(permalink)
print("stub: " + stub)
nextUrl = base+stub
print("next: " + nextUrl)
soup = getSoup(nextUrl)
print(soup.findAll('textarea', {"id": "markup_text"})[0])

end = time.time()
print(end-start)
