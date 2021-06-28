import { useContext, useEffect, useState } from 'react'

import BasketCard from '../common/basketCard'
import CartResume from '../cart/cartResume'

import AppContext from '../AppContext'

 

const BasketStep2 = (props) => {

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
        
         
    }

    

    useEffect(() => {
                
    

        
    }, [])
    



    return (
        <>
            <style jsx>{`
            .containerStep2 {
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
            .navBaskets {
                display: flex;
            }
            .basketResumeContainer {
                display: flex;
                flex-direction: column;
            }
            .basketResume {
                display: flex;
                margin: 29px 0;
            }
            .basketPic img {
                height: 75px;
                margin-right:37px;
            }
            .basketResume p {
                font-size: 16px;
                margin: 0;
            }
            .basketFootResume {
                margin-top: 67px;
            }
            #lastPResume {
                font-size:20px;
                font-weight:bold;
                color: var(--darkGreen);
                text-align: center;
                margin-top:48px;
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
            <div className="containerStep2 fade-in-right">
                <h2>Personnalisez votre abonnement</h2>
                
                
                <div className="customStep2">
                    <h3>2. Choisissez votre préférence de panier</h3>
                
                    <div className="navBaskets">
                       
                        <BasketCard  img="basket/panier-classique.png" 
                                     price="12,50" 
                                     description="Fruits et légumes de saison pour la semaine" 
                                     value={'classique'} 
                                     activeCard={basketContext.type} 
                                     onClick={() => typeChoice('classique')}>Le classique
                        </BasketCard>

                        <BasketCard img="basket/panier-laitier.png" price="20" description="Fruits et légumes de saison avec du lait, des œufs et du fromage" value={'laitier'} activeCard={basketContext.type} onClick={() => typeChoice('laitier')}>Le laitier</BasketCard>

                        <BasketCard img="basket/panier-complet.png" price="26" description="Le panier classique et laitier réunis avec de la viande" value={'complet'} activeCard={basketContext.type} onClick={() => typeChoice('complet')}>Le complet</BasketCard>
                        
                        <BasketCard img="basket/panier-repas.png" price="16" description="Panier pour composer des recettes de saison" value={'recette'} activeCard={basketContext.type} onClick={() => typeChoice('recette')}>Le spéciale recette</BasketCard>
                    </div>
                    <div className="basketsResumeContainer">
                        <div className="basketResume">
                            <div className="basketPic">
                                <img src="basket/panier-classique.png" alt="logo panier classique" />
                            </div>
                            <div className="resume">
                                <span style={{color: "var(--lightGreen)"}}>Le classique</span>
                                <p>Pour 1 personne : 2,5kg de fruits et légumes de saison</p>
                                <p>Pour 2 personnes : 4kg de fruits et légumes de saison</p>
                                <p>Pour 4 personnes : 6,5kg de fruits et légumes de saison</p>
                            </div>
                            
                        </div>
                        <div className="basketResume">
                            <div className="basketPic">
                                <img src="basket/panier-laitier.png" alt="logo panier classique" />
                            </div>
                            <div className="resume">
                                <span style={{color: "var(--yellow)"}}>Le laitier</span>
                                <p>Pour 1 personne : 2,5kg de fruits et légumes de saison + 6 œufs + 1 litre de lait + 250g de fromage</p>
                                <p>Pour 2 personnes : 4kg de fruits et légumes de saison + 8 œufs + 2 litres de lait + 2 pièces de 250g de fromage</p>
                                <p>Pour 4 personnes : 6,5kg de fruits et légumes de saison + 12 œufs + 5 litres de lait + 3 pièces de 250g de fromage</p>
                            </div>
                            
                        </div>
                        <div className="basketResume">
                            <div className="basketPic">
                                <img src="basket/panier-complet.png" alt="logo panier classique" />
                            </div>
                            <div className="resume">
                                <span style={{color: "#ad2323"}}>Le complet</span>
                                <p>Pour 1 personne : 2,5kg de fruits et légumes de saison + 6 œufs + 1 litre de lait + 250g de fromage + 800g de viande, volaille ou poisson</p>
                                <p>Pour 2 personnes : 4kg de fruits et légumes de saison + 8 œufs + 2 litres de lait + 2 pièces de 250g de fromage + 1,5kg de viande, volaille ou poisson</p>
                                <p>Pour 4 personnes : 6,5kg de fruits et légumes de saison + 12 œufs + 5 litres de lait + 3 pièces de 250g de fromage + 4kg de viande, volaille ou poisson</p>
                            </div>
                            
                        </div>
                        <div className="basketResume">
                            <div className="basketPic">
                                <img src="basket/panier-repas.png" alt="logo panier classique" />
                            </div>
                            <div className="resume">
                                <span style={{color: "#ED8843"}}>Le spécial recette</span>
                                <p>Pour 1 personne : 4 paniers recettes de saison pour 1 personnes</p>
                                <p>Pour 2 personnes : 4 paniers recettes de saison pour 2 personnes</p>
                                <p>Pour 4 personnes : 4 paniers recettes de saison pour 4 personnes</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="basketFootResume">
                        <p>Retrouvez les meilleurs produits locaux dans nos paniers made in Loire atlantique ! Chaque semaine vous aurez le choix parmi 4 paniers différents aux aliments de saison. Les paniers seront adaptables selon vos goûts.
                    Ici choisissez votre préférence, vous pourrez toujours changer par la suite. Pas de panique, au moment de la sélection des paniers vous retrouverez tous nos paniers locaux.
                    </p>

                    <p style = {{marginTop: "20px 0"}}>Cochez cette case si vous ne souhaitez pas prendre d’abonnement, vous achèterez donc vos paniers au fur et à mesure de vos besoins : 
                        <input type="checkbox" />
                    </p>

                    <p id="lastPResume">Chaque semaine adaptez votre panier selon vos besoin en choisissant parmi nos 10 paniers différents.
                    Notre abonnement est SANS ENGAGEMENT ! Mettez en pause ou résiliez quand vous voulez.</p>
                    </div>
                    

                </div>

            </div>

                
        </>

    )
}



export default BasketStep2
