#!/usr/bin/env python

from flask import Flask
import pickle

app = Flask(__name__)


@app.route('/coucou')
def coucou():
    return 'Coucou !'


@app.route('/level/<country_code>')
def level(country_code):
    with open("levels_cc.pickle", "rb") as handle:
        levels = pickle.load(handle)
    return levels[country_code]


@app.route('/description/<country_code>')
def description(country_code):
	with open("scrapping_texts.pickle", "rb") as handle:
        texts = pickle.load(handle)
    return texts[country_code]


if __name__ == '__main__':
    app.run()
