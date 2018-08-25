FROM python:3.6-stretch
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install build-essential python3-psycopg2

RUN mkdir -p /var/www/
WORKDIR /var/www/
ADD . /var/www/

# Install dependencies from requirements.txt
RUN pip install --upgrade pip setuptools
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["flask", "run"]
