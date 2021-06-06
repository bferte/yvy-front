
import BasketPreferenceButton from '../components/basket/BasketPreferenceButton'
import SizeStep1 from '../components/basket/sizeStep1'

const Baskets = () => {
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
                <SizeStep1></SizeStep1>
            </div>
        </>

    )
}

export default Baskets