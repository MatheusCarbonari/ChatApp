import React from "react";
import { MdPerson, MdMoreVert, MdSearch } from 'react-icons/md';
import { Avatar, Container, Name, NameContent, Options, UserInfo } from "./styles";

const ChatHeader = ({photoURL, name}) => {
    return(
        <Container>
            <UserInfo>
                {photoURL ? <Avatar src={photoURL} alt="Avatar" /> : <MdPerson /> }
                <NameContent>
                    <Name>{name}</Name>
                </NameContent>
            </UserInfo>
            <Options>
                <MdSearch />
                <MdMoreVert />
            </Options>
        </Container>
    )
}

export default ChatHeader;