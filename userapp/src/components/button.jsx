import {React } from 'react';
import fetch from 'node-fetch';

class SendMessageButton extends React.Component {
  handleClick = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone_number: '+1234567890',  // Replace with the recipient's phone number
        message: 'Hello, Twilio!',    // Replace with the message content
      }),
    };

    try {
      const response = await fetch('http://localhost:5000/send_message', requestOptions);
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <button onClick={this.handleClick}>Send Message</button>
    );
  }
}

export default SendMessageButton;