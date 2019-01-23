# settings.py
import os

from dotenv import load_dotenv

load_dotenv(verbose=True)

AWS_ACCESS_KEY: str = os.getenv('AWS_ACCESS_KEY')
AWS_SECRET_KEY: str = os.getenv('AWS_SECRET_KEY')
PINPOINT_PROJECT: str = os.getenv('PINPOINT_PROJECT')
