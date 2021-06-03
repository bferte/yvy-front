import Button from '../components/common/Button'



const EspacePro = () => {
    return (
        <>
            <style global jsx>{` 
                .resume h2 {
                color : var(--darkGreen);
                }
                .resume {
                    width:60%;
                }



            `}
            </style>

            <div className="containerResume">
                <div className="resume">
                    <h2>Et si vous simplifiez la vie de vos employés ?</h2>
                    <p>Parce que bien mangé signifie souvent avoir du temps, avec YVY choisissez la livraison de paniers locaux dans vos bureaux ! Un gain de temps pour vos employés = une meilleure satisfaction au travail !</p>
                    <a href=""><Button>Demander mon devis</Button></a>
                </div>
                <div className="vegetables"></div>
            </div>
        </>
    )
}

export default EspacePro