from flask import Flask
from flask import request
from flask import jsonify
from flask import render_template
from newsapi import NewsApiClient
import flask

app = Flask(__name__)
newsapi = NewsApiClient(api_key='e909980486c4469cb3d372750f9933ae')


@app.route('/topheadlines', methods=['GET'])
def top_headlines():
    """Provides the n last articles from different sources
        and provide a json array with articles main informations"""
    country = request.args.get('country')
    limit = int(request.args.get('limit'))
    result = newsapi.get_top_headlines(country=country, category='general')
    articles = result['articles']
    array = []

    for i in range(limit):
        article = articles[i]
        array.append({'source': article['source']['name'],
                      'title': article['title'],
                      'description': article['description'],
                      'url': article['url'],
                      'date': article['publishedAt']})
    return jsonify(array)


@app.route('/level', methods=['GET'])
def level(country_code):
    country = request.args.get('country')
    with open("levels_cc.pickle", "rb") as handle:
        levels = pickle.load(handle)
    return levels[country]

if __name__ == '__main__':
    app.run()