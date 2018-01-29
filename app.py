from flask import Flask
from flask import request
from flask import jsonify
from newsapi import NewsApiClient
import database_handler as db

app = Flask(__name__)
newsapi = NewsApiClient(api_key='e909980486c4469cb3d372750f9933ae')


@app.route('/')
def hello():
    return 'hello'


@app.route('/topheadlines', methods=['GET'])
def top_headlines():
    """Provides the n last articles from different sources
        and provide a json array with articles main informations"""
    country = request.args.get('country')
    limit = int(request.args.get('limit'))

    articles = db.top_n_articles(country, limit)
    array = []

    for i in range(limit):
        article = articles[i]
        array.append({'source': article[1],
                      'title': article[0],
                      'description': article[2],
                      'url': article[3],
                      'date': article[4]})
    return jsonify(array)


@app.route('/level', methods=['GET'])
def level():
    country = request.args.get('country')
    levels = db.country_info(country)
    return jsonify(
                danger_level=levels[1],
                additional_infos = levels[2]
    )