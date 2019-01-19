import pendulum
import pytest

from model.person import Person


@pytest.fixture
def create_person():
    name: str = "Sarah Michelle Gellar"
    date_of_birth: pendulum.DateTime = pendulum.datetime(1977, 4, 14, 8, 8, 0)
    person = Person(name=name, date_of_birth=date_of_birth)
    return person


def test_age(create_person):
    assert create_person.age(pendulum.now()).days > 15254
