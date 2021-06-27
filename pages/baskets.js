
import { useState, useContext,useEffect } from 'react'

import Button from '../components/common/Button'
import SizeStep1 from '../components/basket/sizeStep1'
import BasketStep2 from '../components/basket/basketStep2'
import SummaryStep3 from '../components/basket/summaryStep3'

import BasketResumeContext from '../components/BasketResumeContext'

const Baskets = ({basketData}) => {

    const [formStep, setFormStep] = useState(1);
  

    const basketResume = useContext(BasketResumeContext)

    


    
    
 useEffect(() => {
     basketResume.setTitle1(basketData[0].title)
    basketResume.setResume1(basketData[0].description)
    basketResume.setTitle2(basketData[1].title)
    basketResume.setResume2(basketData[1].description)
    basketResume.setTitle3(basketData[2].title)
    basketResume.setResume3(basketData[2].description)
    basketResume.setTitle4(basketData[3].title)
    basketResume.setResume4(basketData[3].description)
     
 }, [])





    let stepDisplay
    if (formStep == 1) {
        stepDisplay = <SizeStep1></SizeStep1>
    }
    if (formStep == 2) {
        stepDisplay =  <BasketStep2></BasketStep2>
    }
    if (formStep == 3) {
        stepDisplay =  <SummaryStep3></SummaryStep3>
    }


     function nextStep() {
    
        setFormStep(formStep + 1)
        window.scrollTo(0,0);  

    }

    function backStep() {
        setFormStep(formStep - 1)
        //console.log(formStep)

    }


    return (
        <>
            <style jsx>
                {`
                .basketChoice {
                    width:80%;
                }
                
                
                
                `}
            </style>
            <div className="basketChoice">
                
               
                {
                    stepDisplay
                }
                


                {
                    formStep < 2
                        ? <a href="/"><Button margin="0 35px 0 0" width="95px" color="var(--lightGreen)" backgroundColor="white" border="1px solid var(--lightGreen)"><svg xmlns="http://www.w3.org/2000/svg" width="6.37" height="11.141" viewBox="0 0 6.37 11.141">
                        <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.7,11.765,11.48,7.552a.793.793,0,0,1,0-1.124.8.8,0,0,1,1.128,0L17.385,11.2a.8.8,0,0,1,.023,1.1l-4.8,4.806a.8.8,0,1,1-1.128-1.124Z" transform="translate(17.616 17.337) rotate(180)" fill="#7baa68" />
                        </svg>&nbsp;
                        Retour</Button></a>

                        : <Button clickEvent={backStep} margin="0 35px 0 0" width="95px" color="var(--lightGreen)" backgroundColor="white" border="1px solid var(--lightGreen)"><svg xmlns="http://www.w3.org/2000/svg" width="6.37" height="11.141" viewBox="0 0 6.37 11.141">
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.7,11.765,11.48,7.552a.793.793,0,0,1,0-1.124.8.8,0,0,1,1.128,0L17.385,11.2a.8.8,0,0,1,.023,1.1l-4.8,4.806a.8.8,0,1,1-1.128-1.124Z" transform="translate(17.616 17.337) rotate(180)" fill="#7baa68" />
                            </svg>&nbsp;
                            Retour
                          </Button>

                }
                {
                    formStep < 3 
                    ?   <Button clickEvent={nextStep} width="95px">
                        Suivant &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="6.366" height="11.134" viewBox="0 0 6.366 11.134">
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.693,11.761,11.48,7.551a.792.792,0,0,1,0-1.124.8.8,0,0,1,1.127,0l4.773,4.77a.794.794,0,0,1,.023,1.1l-4.793,4.8a.8.8,0,1,1-1.127-1.124Z" transform="translate(-11.246 -6.196)" fill="#fff" />
                        </svg>
                        </Button>
                    : null

                }
                
                
            </div>
        </>


    )
}
export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/baskets`);
    const basketData = await res.json();
   // console.log('res',basketData)
    

    return {
        
        props: {
            basketData : basketData,
        }
    }

}



export default Baskets