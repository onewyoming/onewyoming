# settings.py
import os

from dotenv import load_dotenv

load_dotenv(verbose=True)

aws_access_key_id: str = os.getenv('AWS_ACCESS_KEY')
aws_secret_access_key: str = os.getenv('AWS_SECRET_KEY')
