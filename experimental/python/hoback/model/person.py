import attr
import pendulum


@attr.s(auto_attribs=True)
class Person(object):
    name: str
    date_of_birth: pendulum.DateTime

    def age(self, current_date: pendulum.DateTime) -> pendulum:
        return current_date - self.date_of_birth
