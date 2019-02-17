FROM python:stretch
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install build-essential python3-psycopg2

RUN mkdir -p /var/www/
WORKDIR /var/www/
ADD . /var/www 

RUN pip install --upgrade pip setuptools
RUN pip install --user pipenv
RUN export PATH="$HOME/.local/bin:$PATH"
RUN pipenv install
RUN pipenv run pytest
RUN export FLASK_APP=app.py

EXPOSE 5000

ENTRYPOINT ["gunicorn", "-w 2", "-b 0.0.0.0:5000", "app:app"]

