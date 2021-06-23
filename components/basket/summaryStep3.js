import { useContext, useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";

import Button from '../common/Button';
import BasketCard from '../common/basketCard'
import CartResume from '../cart/cartResume'

import AppContext from '../AppContext'





///////// stripe
 
const stripePromise = loadStripe("pk_test_51J0o5eD92IwnR52qSM1ehhDupp2Cs8WWorvJF3L3bLC8shPHnuwsUoLBCtzsHWFdSAczA4eYxe1RIRS42EMEnS5R00IjsQH1Lk");



const handleClick = async (event) => {
    const stripe = await stripePromise;
    const response = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({price: 16, title: 'panier laitier'})
    });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };



//////////

const SummaryStep3 = (props) => {

   
    const basketContext = useContext(AppContext)


    

    useEffect(() => {
                
    

        
    }, [])
    



    return (
        <>
            <style jsx>{`
            h2 {
                color: var(--darkGreen);
                font-size: 44px;
                margin:0;

            }
            h3 {
                font-size: 38px;
                margin: 19px 0;
            }
            .containerStep3 {
                display:flex;
                flex-direction:column;
                margin-bottom: 50px;
            }
            .summary-container {
                height: 518px;
                width:470px;
                box-shadow: 0px 3px 20px #00000029;
                border-radius: 39px;
                margin-top: 30px;
                display:flex;
                flex-direction:column;
                align-items:center;
                text-align:center;
            }
            .resume{
                display:flex;
            }
            .resume img {
                height: 65px;
                
            }
            .sub-resume {
                margin-left: 20px;
                display:flex;
                flex-direction:column;
            }
            .titleBasket {
                color: var(--yellow);
                font-family:var(--font2);
                font-size: 26px;
                font-weight:600;
                text-align: left;
            }
            hr {
                width: 80%;
            }
            .priceHTContainer, .priceTVAContainer, .priceTotalContainer{
                display:flex;
                justify-content: space-between;
                width:80%;
                margin-top:5px;
                margin-bottom:5px;

            }
            .priceTotalContainer {
                font-weight: bold;
                margin-bottom:50px;
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
            <div className="containerStep3 fade-in-right">
                <h2>Personnalisez votre abonnement</h2>
                <p>{basketContext.type}</p>
                <div className="summary-container">
                    <h3>Résumé de votre commande</h3>
                    <div className="resume">
                        <img src="./basket/panier-classique.png" alt="" />
                        <div className="sub-resume">
                            <span className="titleBasket">Panier {basketContext.type}</span>
                            <p className="resumeBasket">loredqshgd dqsd uyg g g gg uygugg </p>
                        </div>
                    </div>
                    <hr color="#EFAA45"/>
                    <div className="priceHTContainer">
                        <span>Prix du panier HT</span>
                        <span className="price">test</span>
                    </div>
                    <div className="priceTVAContainer">
                        <span>TVA</span>
                        <span className="priceTVA">test</span>
                    </div>
                    <hr color="#EFAA45"/>
                    <div className="priceTotalContainer">
                        <span>Total</span>
                        <span className="priceTotal">test</span>
                    </div>

                    <Button clickEvent={handleClick} width="160px">
                        Régler la commande
                        </Button>

                </div>
               
                
                

            </div>

                
        </>

    )
}



export default SummaryStep3
