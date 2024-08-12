import React, { Fragment } from 'react'
import s from "./navbar.module.css"
import { AiFillAccountBook } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Fragment>
            <div className={`${s.Parentsbar}  `}>

                <h1>LOGO</h1>
                <div className={`${s.liens} d-flex`}>
                    <NavLink to="/" className={(nav) => (nav.isActive ? s.active : s.Non_active) + ` ${s.linkhover} `} >
                        <AiFillAccountBook size={50} />
                    </NavLink>
                    <NavLink to="/" className={(nav) => (nav.isActive ? s.active : s.Non_active) + ` ${s.linkhover} `} >
                        <AiFillAccountBook size={50} />
                    </NavLink>
                    <NavLink to="/" className={(nav) => (nav.isActive ? s.active : s.Non_active) + ` ${s.linkhover} `} >
                        <AiFillAccountBook size={50} />
                    </NavLink>
                    <NavLink to="/" className={(nav) => (nav.isActive ? s.active : s.Non_active) + ` ${s.linkhover} `} >
                        <AiFillAccountBook size={50} />
                    </NavLink>
                </div>



            </div>

        </Fragment>
    )
}
