import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Housing() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    // Simulate receiving an automated message from the bot
    const botMessage = {
      id: new Date().getTime(),
      message: 'Automated Bot Message: Do you need any help with housing? ',
    };
    setMessages([botMessage]);
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === '') return; // Prevent empty messages

    const userMessage = {
      id: new Date().getTime(),
      message: currentMessage,
    };

    setMessages([...messages, userMessage]);
    setCurrentMessage('');
  };

  return (
    <Container>
      <Row style={{ minHeight: 'calc(100vh - 56px)', overflowY: 'auto' }}>
        <Col>
          <div>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '10px',
                }}
              >
                <div className="user-icon">User:    </div>
                <div className="message-box">{message.message}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div >
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

export default Housing;
