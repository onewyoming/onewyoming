import unittest
from datetime import datetime

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
        import psycopg2

        try:
            connection = psycopg2.connect("dbname='rawlins' user='postgres' host='localhost' password=''")
            cursor = connection.cursor()
            cursor.execute("""SELECT datname from pg_database""")
            rows = cursor.fetchall()
            for row in rows:
                print("Database name: ", row[0])
        except:
            print("I am unable to connect to the database")


if __name__ == '__main__':
    unittest.main()
