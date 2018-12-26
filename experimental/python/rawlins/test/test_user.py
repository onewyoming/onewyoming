import unittest
from datetime import datetime

import psycopg2

from config import config_section_map
from model.User import User


class TestUser(unittest.TestCase):

    def test_create_user(self):
        visitor = User(
            id="",
            email="hikingfan@gmail.com",
            password="hunter2",
            registration_time=datetime.now()
        )
        self.assertEqual(visitor.email, "hikingfan@gmail.com")
        try:
            print(config_section_map("development")['dbname'])
            connection = psycopg2.connect("dbname='rawlins' user='postgres' host='127.0.0.1' password=''")
            cursor = connection.cursor()
            cursor.execute("""SELECT datname from pg_database""")
            rows = cursor.fetchall()
            for row in rows:
                print("Database name: ", row[0])
        except:
            print("I am unable to connect to the database")


if __name__ == '__main__':
    unittest.main()
