import React, { useEffect, useState } from "react";
import { db, auth } from "./services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import Loading from "./components/Loading";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import './styles/app';
import { Container } from "./styles/app";

const App = () => {

    const [user, loading] = useAuthState(auth);
    const [userChat, setUserChat] = useState(null);

    useEffect(() => {
        if (user){
            db.collection("users").doc(user.uid).set({
                email: user.email,
                photoUrl: user.photoURL,
            });
        }
    }, [user]);

    if(loading) return <Loading/>;

    if(!user) return <Login/>

    return(
        <Container>
            <Sidebar setUserChat={setUserChat} userChat={userChat}/>
        </Container>
        
    )
}

export default App;