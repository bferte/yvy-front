

const SizeStep1 = () => {


    return (
        <>
            <style jsx>{`
            .containerStep1 {
                width:100%;
                display:flex;
                justify-content: start;
                flex-direction: column;
            }
            h2 {
                color: var(--darkGreen);
                
            }
            

            `}</style>
            <div className="containerStep1">
                <h2>Personnalisez votre abonnement</h2>
                <div className="customStep1">
                    <h3>1. Adaptez la taille de votre panier</h3>
                    <span>Nombre de personnes dans votre foyer :</span>
                    <button>1</button>
                </div>
                
            </div>
            

        </>
        
    )
}

export default SizeStep1
