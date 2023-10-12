import React from "react";
import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Content, Line, MessageDate, StyleMessage } from "./style";

const Message = ({user, message}) => {

    const [userLoggedIn] = useAuthState(auth);

    return(
        <Container>
            <Line className={userLoggedIn?.email === user ? "me" : ""}>
                <Content>
                    <StyleMessage>{message.message}</StyleMessage>
                    <MessageDate>
                        {new Date(message?.timestamp).toLocaleString()}
                    </MessageDate>
                </Content>
            </Line>
        </Container>
    );
}

export default Message;