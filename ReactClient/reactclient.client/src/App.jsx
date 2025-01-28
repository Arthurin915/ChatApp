import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import WaitingRoom from './components/waitingRoom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function App() {

    const [connection, setConnection] = useState();

    const joinChatRoom = async(username, chatroom) => {
        try {
            const conn = new HubConnectionBuilder()
            .withUrl("https://localhost:7018/chat").build();
            
            conn.on('ReceiveMessage', (msg) => {
                console.log("join chat by react", msg);
                
            });
    
            await conn.start();
            await conn.invoke("JoinChat", username)
            setConnection(conn);
        } catch(e) {
            console.log(e);
        }

    
    }
    return (
        <div>
            <main>
                <Container>
                    <Row className="px-5 my-5">
                        <Col sm="12">
                        <h1 className="font-weight-light">Welcome to ChatApp</h1>
                        </Col>
                    </Row>
                    <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
                </Container>
            </main>
        </div>
    );
}

export default App;