import attr
import pendulum


@attr.s(auto_attribs=True)
class Person(object):
    name: str
    date_of_birth: pendulum.DateTime

    def age(self):
        return pendulum.now() - self.date_of_birth
