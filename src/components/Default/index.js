import React from "react";
import { Container, Info, Title } from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
    return(
        <Container>
            <MdMessage />
            <Title>Chat App</Title>
            <Info>Agora você pode enviar e receber mensagens sem precisar manter sey celular conectado a internet.</Info>
        </Container>
    )
}

export default Default;