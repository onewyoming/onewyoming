from flask import Flask, render_template, request

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
    return render_template('subscribe.html')


if __name__ == '__main__':
    app.run()
