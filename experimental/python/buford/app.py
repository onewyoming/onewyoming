from datetime import datetime

import pytz
from flask import Flask, render_template, request

from model.applicant import Applicant
from model.visitor import Visitor

app = Flask(__name__)


@app.route('/')
def hello_world():
    save_visitor_information()
    return 'Hello World!'


@app.route('/welcome')
def welcome():
    save_visitor_information()
    return render_template('welcome.html')


@app.route('/subscribe')
def subscribe():
    save_visitor_information()
    return render_template('subscribe.html')


@app.route('/subscribe', methods=['POST'])
def post_subscribe():
    save_visitor_information()
    applicant = Applicant(email=request.form['input_email'],
                          registration_time=datetime.utcnow().replace(tzinfo=pytz.UTC))
    if 0 == applicant.on_save():
        return render_template('success.html')
    return render_template('welcome.html')


def save_visitor_information() -> int:
    visitor = Visitor(ip_address=request.remote_addr, user_agent=request.user_agent, referrer=request.referrer,
                      full_path=request.url, visit_time=datetime.utcnow().replace(tzinfo=pytz.UTC))
    visitor.on_save()
    return 0


if __name__ == '__main__':
    app.run()
