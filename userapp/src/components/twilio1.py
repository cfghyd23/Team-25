from flask import Flask, request
from twilio.rest import Client
from flask_cors import CORS, cross_origin


# Twilio Account SID and Auth Token
account_sid = 'ACb3fc6bdc44818203c56945e331e4b78c'
auth_token = ''

# Create a Flask app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# Route for handling the button click
@app.route('/')
@cross_origin()
def send_message():
    # Get the phone number and message from the request
    account_sid = 'ACb3fc6bdc44818203c56945e331e4b78c'
    auth_token = ''
    client = Client(account_sid, auth_token)

    message = client.messages.create(
    from_='+13613145688',
    body='You are an inactive user. Pleasse login asap',
    to='+919810093504'
    )

    return str(message)

if __name__ == '__main__':
    # Run the Flask app
    app.run()