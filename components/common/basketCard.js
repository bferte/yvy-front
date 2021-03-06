
import { useState, useEffect } from 'react'
const BasketCard = ({ children, ...props }) => {

    const [isActive,setIsActive] = useState(false)


   

    return (
        <div className='cardBasket' onClick={props.onClick}>
            <style jsx>{`
          
            .cardBasket {
                display:flex;
                justify-content:center;
                flex-direction: column;
                width: 255px;
                margin:15px;
                
            }
            .imgBasket {
                height: 238px;
                width: 238px;
                box-shadow: 0px 3px 20px #00000029;
                display: flex;
                justify-content:center;
                align-items:center;
                border-radius: 25px;
                margin:0;
                
            }
            .basketName {
                color: var(--darkGreen);
                font-weight: bold;
                font-size: 20px;
               
            }
            .price {
                color: var(--yellow);
                font-weight: bold;
            }

            img {
                height: 165px;
            }
            .txtBasketCard {
                font-family: var(--font2);
                margin-top:18px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align:center;
            }
            .txtBasketCard span {
                display: inline-block;
                text-align:center;
            }
            .txtBasketCard p {
                margin-top:15px;
            }
            .txtBasketCard a {
                color: var(--lightGreen);
                text-decoration: underline;
            }

            .active {
                background-color: rgba(239,170,69,0.26);
            }

            `}</style>
            {console.log.props}
            <div className={`imgBasket${props.activeCard == props.value ? " active" : ""}`}>
                <img src={props.img} alt="logo panier" />
            </div>
            <div className="txtBasketCard">
                <span className="basketName">{children}</span>
                <span className="price">?? partir de {props.price}???</span>
                <p>{props.description}</p>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11.115" viewBox="0 0 18 11.115">
                    <path id="Icon_material-keyboard-arrow-down" data-name="Icon material-keyboard-arrow-down" d="M11.115,11.76,18,18.63l6.885-6.87L27,13.875l-9,9-9-9Z" transform="translate(-9 -11.76)" fill="#7baa68" />
                    </svg>
                Voir le panier de la semaine</a>
            </div>

        </div>

    )
}

export default BasketCard
