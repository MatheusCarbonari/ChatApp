import React, { useEffect } from "react";
import { db, auth } from "./services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import Loading from "./components/Loading";
import Login from "./components/Login";

const App = () => {

    const [user, loading] = useAuthState(auth);

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
        <div>App</div>
    )
}

export default App;