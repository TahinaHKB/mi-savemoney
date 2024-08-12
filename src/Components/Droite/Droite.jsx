import React, { Fragment } from 'react'
import s from "./droite.module.css"
import Graphe from "../Graphisme/Graphe"
import ShowMoney from '../ShowMoney/ShowMoney';
export default function Droite(props) {
    return (
        <Fragment>
            <div className={`${s.header} d-flex`}>
                <h1>hello {props.user.username}</h1>
                <button onClick={props.logOut}>Sign out</button>
            </div>
            <div className={`${s.basheader} p-4 `}>
                <div className={`${s.boxparents1} row`}>
                    <div className={`${s.box1p1}  col`}>
                        
                    </div>

                    <div className={`${s.box2p1} col`}>
                        <Graphe />

                    </div>
                </div>


                <div className={`${s.boxparents2} d-flex`}>

                    <div className={`${s.box1p2}  `}>
                        <div className={`${s.devise}`}>
                            <h1>Total balance</h1>
                            <h2>10925494 USD</h2>
                            <div className={`${s.conversionmney} d-flex`}>
                                <button className={`${s.btn} `} >ariary</button>
                                <button className={`${s.btn} `} >frcan</button>
                            </div>
                        </div>
                        <h2 className={`${s.titlecitation}`}>Citation</h2>
                        <div className={`${s.citation}`}>
                            <div className={`${s.citation1}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio expedita amet iusto maxime saepe.
                            </div>
                            <div className={`${s.citation1}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio expedita amet iusto maxime saepe.
                            </div>
                            <div className={`${s.citation1}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio expedita amet iusto maxime saepe.
                            </div>
                        </div>
                    </div>

                    <div className={`${s.box2p2}  `}>
                        <img src="image/1.jpg" alt="" />
                    </div>



                </div>
            </div>




        </Fragment>
    )
}
