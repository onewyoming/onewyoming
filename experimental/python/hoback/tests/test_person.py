import pendulum

from model.person import Person


def test_age():
    person = Person(name="Sarah Michelle Gellar", date_of_birth=pendulum.datetime(1977, 4, 14, 8, 8, 0))
    assert person.age().days > 15000
