import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {
  const [user, setUser] = useState();
  const [chatRoom, setChatRoom] = useState();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        joinChatRoom(user, chatRoom);
      }}
    >
      <Row className="px-5 py-5">
        <Col sm={12}>
          <Form.Group>
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
            ></Form.Control>
            <Form.Control
              placeholder="ChatRoom"
              onChange={(e) => setChatRoom(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <hr />
          <Button variant="success" type="submit">
            Join Chat
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default WaitingRoom;
