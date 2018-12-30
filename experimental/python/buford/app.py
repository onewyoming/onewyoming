import logging

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/welcome')
def welcome():
    logging.basicConfig(filename='app.log',
                        filemode='a',
                        format='%(name)s - %(levelname)s - %(message)s',
                        level=logging.DEBUG)
    logging.debug(f"Request information: ")
    for argument in request.args:
        print(f"{argument}")
    logging.debug(f"User agent: {request.user_agent.platform}")
    return render_template('welcome.html')


@app.route('/subscribe')
def subscribe():
    return render_template('subscribe.html')


if __name__ == '__main__':
    app.run()
