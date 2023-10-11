import React from "react";
import './styles';
import { Container } from "./styles";
import SidebarHeader from "../SidebarHeader";
import SidebarChats from "../SidebarChats";

const Sidebar = ({setUserChat, userChat}) => {
    return(
        <Container>
            <SidebarHeader setUserChat={setUserChat}/>
            <SidebarChats setUserChat={setUserChat} userChat={userChat} />
        </Container>
    )
}

export default Sidebar;