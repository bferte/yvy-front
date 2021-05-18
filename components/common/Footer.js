const Footer = () => {
  return (
    <>
      <style jsx>{`
        footer {
          margin-top: 46px;
          background-image: url("bgGreenFooter.svg");
          background-position: center top;
          background-size:2200px ;
          background-repeat: no-repeat;
          color: black;
          width: 100%;
          display:flex;
          flex-direction: column;
          align-items:center;
          
        }
        
        .footerMenu {
          
          display: flex;
          justify-content: space-between;
          padding-top: 45px;
          padding-right:15px;
          padding-left:15px;
          font-family: var(--font1);
        }
        .footerMenu ul {
          display: flex;
          flex-direction: column;
          padding-inline-start: 0px;
          
        }

        .footerMenu h3 {
          margin-top: 0;
          margin-bottom: 0;
          color: var(--darkGreen);
          font-family:var(--font2);
          font-weight: 800;
          font-size: 20px;
          text-align:left;
          
        }
        .footerMenu li {
          margin: 10px 0;
          align-self: start;
          font-size:17px;
        }
        .columnMenu {
          margin:35px;
        }
        .columnMenu li {
          display:flex;        
        }
        .columnMenu li img {
          margin-right: 8px;
        }
        .logoContainer {
          background-color: var(--white);
          display:flex;
          border-radius:35px;
        }
        .logoContainer img {
          width:auto;
          padding: 10px 25px;
        }
        small {
          color: var(--darkGreen);
          font-family: var(--font2);
          font-size:16px;
          text-align:center;
          margin: auto;
          display:block;
          margin -35px 0 9px 0;

        }
      `}</style>
      <footer>
        
        <div className="footerMenu">
          <div className="columnMenu">
            <h3>Aide et contact</h3>
            <ul>
              <li>FAQ: vos questions</li>
              <li>Nous contacter</li>
              <li>Un problème avec votre commande ?</li>
              <li>Suivre ma commande</li>
              <li>Accessibilité</li>
            </ul>
          </div>
          <div className="columnMenu">
            <h3>Mon compte</h3>
            <ul>
              <li>Mon compte</li>
              <li>Mon panier</li>
              <li>Mon abonnement</li>
            </ul>
          </div>
          <div className="columnMenu">
            <h3>YVY</h3>
            <ul>
              <li>Notre histoire</li>
              <li>Notre concept</li>
              <li>Conditions générales de ventes</li>
              <li>Politique de cookies</li>
              <li>Presse</li>
            </ul>
          </div>
          <div className="columnMenu">
            <h3>Suivez-nous !</h3>
            <ul>
              <li><img src="FbLogo.svg" alt="logo facebook"/>@yvy_paniers.locaux</li>
              <li><img src="instaLogo.svg" alt="logo instagram"/>@yvy_paniers.locaux</li>
              <li><img src="linkedinLogo.svg" alt="logo linkedin"/>@yvy_paniers.locaux</li>
            </ul>
            <div className="logoContainer">
              <img src="logoYvy.svg" alt="" srcset="" />
            </div>
            
          </div>
          
        </div>
        <small>© Copyright 2021 YVY</small>
      </footer>
    </>
  );
};

export default Footer;
