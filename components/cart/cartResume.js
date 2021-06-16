import { useEffect,useState } from 'react'
import Button from "../common/Button"

const CartResume = (props) => {

    const [titleResume,setTitleResume] = useState()

    useEffect(() => {
       setTitleResume(props.titleResume)
    }, [])

    return (
            <>

            
            <style jsx>
                {`
                img {
                    height: 322px;
                    border-radius: 62px;

                }
                
                `}
            </style>
            <div className="cartResumeContainer">
                {console.log(props.titleResume)}
                <div className="imgResume">
                    <img src="basket/panier-laitier-1.jpg" alt=""  />
                </div>
                <div className="resume">
                    
                    <span>{props.titleResume}</span>
                    <p></p>
                    <span></span>
                    <div className="resumeQuantity">
                        <Button>En savoir plus</Button>
                        <Button>
                        Suivant &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="6.366" height="11.134" viewBox="0 0 6.366 11.134">
                        <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.693,11.761,11.48,7.551a.792.792,0,0,1,0-1.124.8.8,0,0,1,1.127,0l4.773,4.77a.794.794,0,0,1,.023,1.1l-4.793,4.8a.8.8,0,1,1-1.127-1.124Z" transform="translate(-11.246 -6.196)" fill="#fff" />
                        </svg>
                        </Button>

                    </div>
                </div>
            </div>
        
    

        
            </>
    )
}



export default CartResume