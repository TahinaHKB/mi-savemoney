import React, { Fragment } from 'react'
import s from "./droite.module.css"

export default function Droite() {
    return (
        <Fragment>
            <div className={`${s.header} d-flex`}>
                <h1>hello aurelien valavo</h1>
                <img className={`${s.sary}`} src="logo192.png" alt="" />
            </div>
            <div className={`${s.basheader} p-4 `}>
                <div className={`${s.boxparents1} row`}>
                    <div className={`${s.box1p1}  col`}>
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

                    <div className={`${s.box2p1} col`}>


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
