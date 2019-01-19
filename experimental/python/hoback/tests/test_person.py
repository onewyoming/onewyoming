import unittest
from datetime import datetime

from pytz import timezone

from model.person import Person


class TestPerson(unittest.TestCase):

    def test_get_age(self):
        date = datetime(1977, 4, 14, 3, 8, 30)
        tz = timezone('US/Eastern')
        date_tz = tz.normalize(tz.localize(date))
        person = Person(name="Sarah Michelle Gellar",
                        date_of_birth=date_tz)
        current_time = datetime.utcnow()
        current_time_normalized = current_time.astimezone(timezone('UTC'))
        age_in_seconds = person.get_age(current_time_normalized)
        print(person.get_age(current_time_normalized))
        self.assertGreater(int(age_in_seconds), 40 * 365 * 24 * 60 * 60)
