import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth, db} from "../Firebase";
import { ref, onValue } from "firebase/database";

const Home = () =>
{
    const navigate = useNavigate();
    const anonymosUser = 
    {
        uid : "",
        email : "",
        username : "",
    }
    const [user, setUser] = useState(anonymosUser);
    useEffect(() =>{
        onAuthStateChanged(auth, (u) => {
            if(u)
            {
                onValue(ref(db, '/users/' + u.uid), (snapshot) => {
                    setUser({uid: u.uid, email: snapshot.val().email, username: snapshot.val().username });
                  }, {
                    onlyOnce: true
                  })
            }
            else 
            {
                navigate("/");
            }
        })
    }, [])

    const handleLogOut = () =>
    {
        signOut(auth).then(() => {
            navigate("/");
        })
    }
    return (
        <div>
            <h1>Bienvenue {user.username}</h1>
            <button onClick={handleLogOut}>Deconnexion</button>
        </div>
    );
}

export default Home;