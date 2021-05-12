

const BasketPreferenceButton = ({children,...props}) => {


    return (
        <>
            <style jsx>{`
            .containerBasketButton {
                border: 1px solid black;
                display: flex;
                flex-direction: column;
                padding: 10px;
                border-radius: 15px
            }
            
            `}</style>
            <div className="containerBasketButton">
                <img src={props.image} alt="" width="70px" />

                <span>{children}</span>
            </div>
        </>
    )
}

export default BasketPreferenceButton