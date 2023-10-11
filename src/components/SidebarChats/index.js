import React from "react";
import { auth, db } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import './styles';
import SidebarChatsItem from '../SidebarChatsItem';
import { Container, Content, Divider } from "./styles";

const SidebarChats = ({ setUserChat, userChat}) => {

    const [user] = useAuthState(auth);
    const refChat = db.collection("chats").where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(refChat);

    return(
        <Container>
            {chatsSnapshot?.docs.map((item, index) => (
                <Content key={index}>
                    <SidebarChatsItem
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "active" : ""}
                    />
                    <Divider/>
                </Content>
            ))}
        </Container>
    )
}

export default SidebarChats;