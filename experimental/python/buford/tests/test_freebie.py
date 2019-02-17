import pytest


@pytest.fixture
def return_fortytwo():
    return 42


def test_to_string(return_fortytwo):
    assert 42 == return_fortytwo
