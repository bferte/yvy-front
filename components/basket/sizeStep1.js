import React, { useContext, useEffect, useState } from 'react'

import Button from '../common/Button'


import AppContext from '../AppContext'

const SizeStep1 = (props) => {

        //const { basketSize, setBasketSize } = useContext(AppContext)

       // setBasketSize(1)

       const [basketSize,setBasketSize] = useContext(AppContext);

       const [activeBtn,setActiveBtn] = useState('')

       const sizeChoice = (event) => {
            setBasketSize(event.target.value)
            setActiveBtn(event.target.value)
       }






       useEffect(() => {
           console.log(basketSize)
           console.log(activeBtn)

       })
           


    return (
        <>
            <style jsx>{`
            .containerStep1 {
                width:100%;
                display: ${props.display};
                justify-content: start;
                flex-direction: column;
            }
            h2 {
                color: var(--darkGreen);
                font-size: 44px;
                margin:0;

            }
            h3 {
                font-size: 38px;
                margin: 19px 0;
            }

            span {
                font-size : 20px;
                color: var(--darkGreen);
                font-weight: bold;
            }
            .buttonNumbers {
                box-shadow: 0px 3px 20px #0000001A;
                padding: 35px 45px;
                border-radius: 50%;
                margin: 20px;
                color: var(--lightGreen);
                font-size: 35px;
                font-weight: bold;
                background-color: var(--white);
                border:none;
                margin-bottom:40px;
            }
            .activeBtn {
                background-color: var(--lightGreen);
                color: var(--white);
                opacity: 37%;
                transition-duration: 1s;
            }

            @-webkit-keyframes fade-in-right {
                0% {
                  -webkit-transform: translateX(50px);
                          transform: translateX(50px);
                  opacity: 0;
                }
                100% {
                  -webkit-transform: translateX(0);
                          transform: translateX(0);
                  opacity: 1;
                }
              }
              @keyframes fade-in-right {
                0% {
                  -webkit-transform: translateX(50px);
                          transform: translateX(50px);
                  opacity: 0;
                }
                100% {
                  -webkit-transform: translateX(0);
                          transform: translateX(0);
                  opacity: 1;
                }
              }

              .fade-in-right {
                -webkit-animation: fade-in-right 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                        animation: fade-in-right 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            }
              
            

            `}</style>
            <div className="containerStep1 fade-in-right">
                <h2>Personnalisez votre abonnement</h2>

                
                <AppContext.Consumer>
                {(data) => {
                    return (
                    <h1>
                        The "value" prop passed to "Provider" was {data}
                    </h1>
                    )
                }}
                </AppContext.Consumer>
                <div className="customStep1">
                    <h3>1. Adaptez la taille de votre panier</h3>
                    <span>Nombre de personnes dans votre foyer :</span>
                    <div className="buttonNumbersContainer">
                        <button onClick={sizeChoice} className={`buttonNumbers${basketSize == 1 ? " activeBtn" : ""}`} value={1}>1</button>
                        <button onClick={sizeChoice} className={`buttonNumbers${basketSize == 2 ? " activeBtn" : ""}`} value={2}>2</button>
                        <button onClick={sizeChoice} className={`buttonNumbers${basketSize == 3 ? " activeBtn" : ""}`} value={3}>3</button>
                        <button onClick={sizeChoice} className={`buttonNumbers${basketSize == 4 ? " activeBtn" : ""}`} value={4}>4</button>
                        <button onClick={sizeChoice} className={`buttonNumbers${basketSize == 5 ? " activeBtn" : ""}`} value={5}>5</button>
                    </div>
                    
                </div>

            </div>


        </>

    )
}

export default SizeStep1
