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
RUN export FLASK_ENV=development

EXPOSE 5000

CMD ["flask", "run --host=0.0.0.0 --port=5000"]
