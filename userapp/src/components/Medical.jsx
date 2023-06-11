import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

function Medical() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: 'Please mention your health related query here in the chat (you can add tags also to specify a particular health issue.).',
      tags: [],
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === '') return; // Prevent empty messages

    const messageWithTags = {
      id: new Date().getTime(),
      message: currentMessage,
      tags: selectedTag ? [selectedTag] : [],
    };

    setMessages([...messages, messageWithTags]);
    setCurrentMessage('');
    setSelectedTag('');
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setShowModal(false);
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
                <div className="user-icon">User: </div>
                <div className="message-box">{message.message}</div>
                {message.tags.length > 0 && (
                  <div style={{ marginLeft: '10px', color: '#999' }}>
                    {message.tags.map((tag) => (
                      <span key={tag}>#{tag} </span>
                    ))}
                  </div>
                )}
              </div>
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
              <Button variant="primary" type="button" onClick={() => setShowModal(true)}>
                Assign Tag
              </Button>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary" onClick={() => handleTagSelect('Health')}>
          Emotional Help
          </Button>
          <Button variant="primary" onClick={() => handleTagSelect('Health related issue')}>
          Health related issue
          </Button>
          <Button variant="primary" onClick={() => handleTagSelect('Need doctor consultancy , what are the ways to proceed .')}>
          Need doctor consultancy , what are the ways to proceed .
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Medical;
