// import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './chat.css'

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');

  // useEffect(()=>{
  //   axios.get()//get call to get all the messages
  //   .then((response)=>{
  //     //setMessages(response)
  //   })
  // },[])

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

  // const sendData=(currentMessage)=>{
  //   axios
  //     .post("/", {
  //       //TODO SEND REQ
  //     })
  //     .then((response) => {
  //       //TODO PRINT RESP
  //     });
  // };
  

  return (
    <Container className = "chatarea">
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
                <div className="user-icon">User</div>
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
          <div className="input-box">
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
              {/* <Button variant="primary" type="submit" onClick={()=> sendData(currentMessage)}> */}
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
            Health
          </Button>
          <Button variant="primary" onClick={() => handleTagSelect('Work')}>
            Work
          </Button>
          <Button variant="primary" onClick={() => handleTagSelect('Personal')}>
            Personal
          </Button>
          {/* Add more tags as needed */}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ChatInterface;