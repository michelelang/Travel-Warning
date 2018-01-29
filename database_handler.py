import sqlite3
from newsapi import NewsApiClient
import time
from googletrans import Translator

DB_NAME = 'COUNTRY_ARTICLES'
REFRESH_DELTA = 15
newsapi = NewsApiClient(api_key='e909980486c4469cb3d372750f9933ae')
translator = Translator()


def read_country_table():
    with sqlite3.connect(DB_NAME) as con:
        cursor = con.cursor()
        countries = cursor.execute("SELECT * FROM country")
        rows = countries.fetchall()
        for row in rows:
            print(row)


def country_info(country):
    with sqlite3.connect(DB_NAME) as con:
        cursor = con.cursor()
        country_info = cursor.execute("SELECT * FROM country WHERE country_code = \'%s\'" %(country, ))
        return country_info.fetchone()


def insert_articles(cursor, country, limit):
    result = newsapi.get_top_headlines(country=country, category='general')
    articles = result['articles']
    for i in range(limit):
        article = articles[i]
        cursor.execute("INSERT INTO articles VALUES (?,?,?,?,?,?,?)",
                       (translator.translate(article['title']).text,
                        article['source']['name'],
                        translator.translate(article['description']).text,
                        article['url'],
                        article['publishedAt'],
                        time.time(),
                        country))


def top_n_articles(country, limit):
    with sqlite3.connect(DB_NAME) as con:
        cursor = con.cursor()
        to_retrieve = None
        cursor_result = cursor.execute("SELECT * FROM articles WHERE country_code = \'%s\' LIMIT %i" %(country, limit, ))
        rows = cursor_result.fetchall()

        if len(rows) == 0:
            insert_articles(cursor, country, limit)
        elif time.time() - int(rows[0][5]) > REFRESH_DELTA * 60:
            cursor.execute("DELETE FROM articles WHERE country_code = \'%s\'" %(country, ))
            insert_articles(cursor, country, limit)

        to_retrieve = cursor.execute("SELECT * FROM articles WHERE country_code = \'%s\' LIMIT %i" %(country, limit, ))
        return to_retrieve.fetchall()
