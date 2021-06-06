
import { useState} from 'react'

import BasketPreferenceButton from '../components/basket/BasketPreferenceButton'
import Button from '../components/common/Button'
import SizeStep1 from '../components/basket/sizeStep1'
import BasketStep2 from '../components/basket/basketStep2'

const Baskets = () => {

    const [formStep,setFormStep] = useState("");
    const [visible1, setVisible1] = useState("none");

    function toggleVisible1 () {
        if (visible1 == "none") {
            setVisible1("flex")
        } else {
            setVisible1("none")
        }

    }

    

    
    

    return (
        <>
            <style jsx>
                {`
                .basketChoice {
                    width:100%;
                }
                
                `}
            </style>
            <div className="basketChoice">
                <SizeStep1 display={visible1}></SizeStep1>
                <BasketStep2></BasketStep2>
                <Button   margin="0 35px 0 0" width="95px" color="var(--lightGreen)" backgroundColor="white" border="1px solid var(--lightGreen)"><svg xmlns="http://www.w3.org/2000/svg" width="6.37" height="11.141" viewBox="0 0 6.37 11.141">
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.7,11.765,11.48,7.552a.793.793,0,0,1,0-1.124.8.8,0,0,1,1.128,0L17.385,11.2a.8.8,0,0,1,.023,1.1l-4.8,4.806a.8.8,0,1,1-1.128-1.124Z" transform="translate(17.616 17.337) rotate(180)" fill="#7baa68" />
                            </svg>&nbsp;
                            Retour
                    </Button>
                    <Button clickEvent = {toggleVisible1} width="95px">
                        Suivant &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="6.366" height="11.134" viewBox="0 0 6.366 11.134">
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.693,11.761,11.48,7.551a.792.792,0,0,1,0-1.124.8.8,0,0,1,1.127,0l4.773,4.77a.794.794,0,0,1,.023,1.1l-4.793,4.8a.8.8,0,1,1-1.127-1.124Z" transform="translate(-11.246 -6.196)" fill="#fff" />
                        </svg>
                    </Button>
            </div>
        </>

    )
}

export default Baskets