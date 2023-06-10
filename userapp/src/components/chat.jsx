import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === '') return; // Prevent empty messages

    setMessages([...messages, currentMessage]);
    setCurrentMessage('');
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="fixed-bottom">
            <Form onSubmit={handleMessageSubmit}>
              <Form.Group controlId="message">
                <Form.Control
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatInterface;