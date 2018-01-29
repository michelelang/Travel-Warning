import sqlite3
import pickle

DB_NAME = 'COUNTRY_ARTICLES'


def create_tables(cursor):
    cursor.execute("DROP TABLE IF EXISTS country;")
    cursor.execute("CREATE TABLE country("
                   "    country_code text primary key,"
                   "    danger_level int,"
                   "    additional_info text);")

    cursor.execute("DROP TABLE IF EXISTS articles;")
    cursor.execute("CREATE TABLE articles("
                   "    title text,"
                   "    source text,"
                   "    description text,"
                   "    url text,"
                   "    publish_date date,"
                   "    upload_date_since_epoch int,"
                   "    country_code references country);")


def fill_country_table(cursor):
    with open("levels_cc.pickle", "rb") as handle:
        levels = pickle.load(handle)
        for key, value in levels.items():
            cursor.execute("INSERT INTO country VALUES (?,?,?)", (key, value[0], value[1]))
    handle.close()


def main():
    with sqlite3.connect(DB_NAME) as con:
        cursor = con.cursor()
        create_tables(cursor)
        fill_country_table(cursor)
        cursor.close()

if __name__ == '__main__':
    main()
