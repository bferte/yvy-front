import Button from '../common/Button'

const SizeStep1 = (...props) => {





    return (
        <>
            <style jsx>{`
            .containerStep1 {
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
                {console.log(props[0])}
                <div className="customStep1">
                    <h3>1. Adaptez la taille de votre panier</h3>
                    <span>Nombre de personnes dans votre foyer :</span>
                    <div className="buttonNumbersContainer">
                        <button className="buttonNumbers">1</button>
                        <button className="buttonNumbers">2</button>
                        <button className="buttonNumbers">3</button>
                        <button className="buttonNumbers">4</button>
                        <button className="buttonNumbers">5</button>
                    </div>
                    
                </div>

            </div>


        </>

    )
}

export default SizeStep1
