from dataclasses import dataclass

import pytz

from config import get_connection


@dataclass()
class Referral:
    referrer: int
    referee: int
    referral_time: pytz

    def on_save(self):
        connection = get_connection()
        cursor = connection.cursor()
        cursor.execute(
            """
            insert into referrals (referrer, referee, referral_time) values (%s, %s, %s);
            """,
            (
                self.referrer,
                self.referee,
                self.referral_time
            )
        )
        connection.commit()
        connection.close()
        return 0
