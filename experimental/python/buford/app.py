from datetime import datetime

import pytz
from flask import Flask, render_template, request
from flask_track_usage import TrackUsage
from flask_track_usage.storage.output import OutputWriter
from flask_track_usage.storage.printer import PrintWriter

from model.applicant import Applicant
from model.visitor import Visitor, get_visit_count

app = Flask(__name__)

# Set the configuration items manually for the example
app.config['TRACK_USAGE_USE_FREEGEOIP'] = False
# You can use a different instance of freegeoip like so
# app.config['TRACK_USAGE_FREEGEOIP_ENDPOINT'] = 'https://example.org/api/'
app.config['TRACK_USAGE_INCLUDE_OR_EXCLUDE_VIEWS'] = 'include'

# We will just print out the data for the example

# We will just print out the data for the example

# Make an instance of the extension and put two writers
t = TrackUsage(app, [
    PrintWriter(),
    OutputWriter(transform=lambda s: "OUTPUT: " + str(s))
])


@t.include
@app.route('/')
def hello_world():
    save_visitor_information()
    return render_template('welcome.html')


@t.include
@app.route('/welcome')
def welcome():
    save_visitor_information()
    return render_template('welcome.html')


@t.include
@app.route('/subscribe')
def subscribe():
    save_visitor_information()
    return render_template('subscribe.html')


@t.include
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


@app.context_processor
def inject_global_organization_name():
    return dict(global_organization_name="Wyoming, Inc.")


@app.context_processor
def inject_global_visitor_count():
    return dict(visit_count=get_visit_count())


if __name__ == '__main__':
    app.run()
