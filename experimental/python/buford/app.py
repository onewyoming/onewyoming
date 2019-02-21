from datetime import datetime, timedelta

import pytz
from flask import Flask, render_template, request, make_response
from flask_track_usage import TrackUsage
from flask_track_usage.storage.output import OutputWriter
from flask_track_usage.storage.printer import PrintWriter

from model.applicant import Applicant, get_id_from_email
from model.referral import Referral
from model.visitor import Visitor, get_visit_count, get_last_n_visitors

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
    referrer = request.args.get('referrer')
    if referrer:
        print(f"hello, referrer: {referrer}")
    return render_template('subscribe.html')


@t.include
@app.route('/subscribe', methods=['POST'])
def post_subscribe():
    save_visitor_information()
    applicant = Applicant(email=request.form['input_email'],
                          registration_time=datetime.utcnow().replace(tzinfo=pytz.UTC))
    if 0 == applicant.on_save():
        referrer = request.args.get('referrer')
        if referrer:
            print(f"hello, referrer: {referrer}")
            referrer_id = get_id_from_email(referrer)
            referee_id = get_id_from_email(applicant.email)
            new_referral = Referral(referrer=referrer_id, referee=referee_id,
                                    referral_time=datetime.utcnow().replace(tzinfo=pytz.UTC))
            new_referral.on_save()
        return render_template('success.html',
                               referral_url=f"https://mynepal.duckdns.org/subscribe?referrer={applicant.email.lower()}")
    return render_template('welcome.html')


@t.include
# a route for generating sitemap.xml
@app.route('/sitemap.xml', methods=['GET'])
def sitemap():
    """Generate sitemap.xml. Makes a list of urls and date modified."""
    save_visitor_information()
    pages = []
    ten_days_ago = (datetime.now() - timedelta(days=10)).date().isoformat()
    # static pages
    for rule in app.url_map.iter_rules():
        if "GET" in rule.methods and len(rule.arguments) == 0:
            pages.append(
                [f"https://mynepal.duckdns.org{rule.rule}", ten_days_ago]
            )
    sitemap_xml = render_template('sitemap.xml', pages=pages)
    response = make_response(sitemap_xml)
    response.headers["Content-Type"] = "application/xml"
    return response


def save_visitor_information() -> int:
    visitor = Visitor(ip_address=request.remote_addr, user_agent=request.user_agent, referrer=request.referrer,
                      full_path=request.url, visit_time=datetime.utcnow().replace(tzinfo=pytz.UTC))
    visitor.on_save()
    return 0


@app.context_processor
def inject_global_organization_name():
    return dict(global_organization_name="My Nepal")


@app.context_processor
def inject_global_visitor_count():
    return dict(visit_count=get_visit_count())


@app.context_processor
def inject_last_three_users():
    return dict(last_ten_users=get_last_n_visitors(10))


if __name__ == '__main__':
    app.run()
