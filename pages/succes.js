const Succes = () => {
    return (
            <>
            <style global jsx>{`
            
            .SuccesContainer{
                display:flex;
                flex-direction:column;
                width:80%;
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
            .imgVoiture {
                width: 20%;
                transform: translate(1000px);
                animation-name: drive;
                transition-duration: 4s;
                
                animation-iteration-count: 2;


            }
            .imgSmoke {
                width:8%;
                position:relative;
                bottom:90px;
                right:150px;

            }
            @keyframes yourAnimation {
                0.0%{
                    transform: translate(0px);
                }
                100%{
                    transform: translate(900px);
                }
            }


            .carAnimate{
                animation: yourAnimation 10s ease 0s infinite normal none;
            }

     
      
      
            `}</style>
            <div className="SuccesContainer">
                <h2>Merci ! Vous serez livré Mardi à partir de 14H</h2>
                <h3>Votre entreprise gardera votre commande au frais jusqu’à votre réception</h3>
                <img className="imgVoiture carAnimate" src="basket/voiture.png" alt="voiture yvy" />
                <img className="imgSmoke carAnimate" src="smoke.png" alt="fumée" />
                
            </div>
            </>
    )
}

export default Succes