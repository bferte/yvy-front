import { useContext, useEffect, useState } from 'react'

import BasketCard from '../common/basketCard'
import CartResume from '../cart/cartResume'

import AppContext from '../AppContext'

 

const SummaryStep3 = (props) => {

   // const [basketSize,setBasketSize] = useContext(AppContext);
    // [basketType,setBasketType] = useContext(AppContext);

    //const [activeCard,setActiveCard] = useContext(AppContext);

    const basketContext = useContext(AppContext)
    const [isActive,setIsActive] = useState(false)

    const [titleResume,setTitleResume] = useState();
    const [descriptionResume, setDescriptionResume] = useState();

    

    



    const typeChoice = (value,title) => {
        
        basketContext.setType(value)
        setTitleResume(title)
        console.log(titleResume)
        //console.log(props.basketData[1].title)



        
        
        
        
         
    }

    

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

                <div className="summary-container">
                    <h3>Résumé de votre commande</h3>
                    <div className="resume">
                        <img src="./basket/panier-classique.png" alt="" />
                        <div className="sub-resume">
                            <span className="titleBasket">panier laitier</span>
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

                </div>
                <div className="testStripe">
                    <span>test stripe</span>
                    <button id="checkout-button">Checkout</button>
                    <script src="https://js.stripe.com/v3/"></script>
                </div>
                
                

            </div>

                
        </>

    )
}



export default SummaryStep3
