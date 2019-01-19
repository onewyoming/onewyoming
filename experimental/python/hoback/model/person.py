import attr
import pendulum


@attr.s
class Person(object):
    name: str = attr.ib()
    date_of_birth: pendulum.DateTime = attr.ib()

    def age(self):
        return pendulum.now() - self.date_of_birth
