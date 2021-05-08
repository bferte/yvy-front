const Footer = () => {
  return (
    <>
      <style jsx>{`
        footer {
          margin-top: 120px;
          background-color: var(--lightGreen);
          color: black;
          border-radius: 74px 74px 0px 0px;
          width: 100%;
          display:flex;
          flex-direction: column;
          align-items:center;
          
        }
        .logo {
          width: 396px;
          height: 143px;
          background-color: var(--white);
          padding: 20px 76px;
          border-radius: 78px;
          margin-top: -71.5px;
          
        
        }
        .footerMenu {
          
          display: flex;
          justify-content: center;
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
          margin-bottom: 16px;
          color: var(--white);
          font-weight: 200;
          text-align:left;
          
        }
        .footerMenu li {
          margin: 10px;
          align-self: start
        }
        .columnMenu {
          margin:35px
        }
        small {
          color: var(--white);
          font-family: var(--font2);
          font-size:16px;
          text-align:center;
          margin: auto;
          display:block;
          margin 48px 0 14px 0;

        }
      `}</style>
      <footer>
        <div className="logo">
          <img src="logoYvy.svg" alt="" srcset="" />
        </div>
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
              <li>@yvy_paniers.locaux</li>
              <li>@yvy_paniers.locaux</li>
              <li>@yvy_paniers.locaux</li>
            </ul>
          </div>
          
        </div>
        <small>© Copyright 2021 YVY</small>
      </footer>
    </>
  );
};

export default Footer;
