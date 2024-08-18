import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../Firebase";
import { ref, onValue } from "firebase/database";
import s from "./home.module.css";
import Navbar from "../navbars/Navbar";
import ModuleManage from "../Droite/ModuleManage";

const Manage = () => {
    const navigate = useNavigate();
    const anonymosUser =
    {
        uid: "",
        email: "",
        username: "",
    }
    const [user, setUser] = useState(anonymosUser);
    useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            if (u) {
                onValue(ref(db, '/users/' + u.uid), (snapshot) => {
                    setUser({ uid: u.uid, email: snapshot.val().email, username: snapshot.val().username });
                }, {
                    onlyOnce: true
                })
            }
            else {
                navigate("/");
            }
        })
    }, [])

    const handleLogOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        })
    }
    return (
        <Fragment>
            <main className={`${s.parents} `}>
                <div className={`${s.gauche}  `}>
                  <Navbar />
                </div>
                <div className={`${s.droite} `}>
                  <ModuleManage />
                </div>
            </main>

        </Fragment>
    );
}

export default Manage;