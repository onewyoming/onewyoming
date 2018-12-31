from datetime import datetime

from flask import Flask, render_template, request

from model.applicant import Applicant

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/welcome')
def welcome():
    return render_template('welcome.html')


@app.route('/subscribe')
def subscribe():
    return render_template('subscribe.html')


@app.route('/subscribe', methods=['POST'])
def post_subscribe():
    print(request.form['input_email'])
    applicant = Applicant(email=request.form['input_email'], registration_time=datetime.utcnow())
    if 0 == applicant.on_save():
        return render_template('subscribe.html')
    return render_template('welcome.html')


if __name__ == '__main__':
    app.run()
