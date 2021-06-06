import BasketCard from '../common/basketCard'


const BasketStep2 = (...props) => {


    return (
        <>
            <style jsx>{`
            .containerStep2 {
                width:100%;
                display: ${props[0].display};
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
                        <BasketCard img="basket/panier-classique.png" price="12,50" description="Fruits et légumes de saison pour la semaine">Le classique</BasketCard>
                        <BasketCard img="basket/panier-laitier.png" price="20" description="Fruits et légumes de saison avec du lait, des œufs et du fromage">Le laitier</BasketCard>
                        <BasketCard img="basket/panier-complet.png" price="26" description="Le panier classique et laitier réunis avec de la viande">Le complet</BasketCard>
                        <BasketCard img="basket/panier-repas.png" price="16" description="Panier pour composer des recettes de saison">Le spéciale recette</BasketCard>
                    </div>

                </div>

            </div>


        </>

    )
}

export default BasketStep2
