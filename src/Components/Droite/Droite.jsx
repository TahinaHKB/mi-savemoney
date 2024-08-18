import React, { Fragment } from 'react'
import s from "./droite.module.css"
import Graphe from "../Graphisme/Graphe"
import ShowMoney from '../ShowMoney/ShowMoney'


export default function Droite(props) {
    return (
        <Fragment>
            <div className={`${s.header} d-flex`}>
                <h2>hello {props.user.username} !</h2>
                <button className={`${s.deconnexion}`} onClick={props.logOut}>Sign out</button>
            </div>
            <div className={`${s.basheader} p-4 `}>
                <div className={`${s.boxparents1} row`}>
                    <div className={`${s.box1p1}  col`}>
                        <ShowMoney />
                    </div>

                    <div className={`${s.box2p1} col`}>
                        <Graphe />

                    </div>
                </div>


                
            </div>




        </Fragment>
    )
}
