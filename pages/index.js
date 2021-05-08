import { useSession, signOut } from 'next-auth/client'
import styles from '../styles/Home.module.css'

import Button from '../components/common/Button'


export default function Home() {
  const [session, loading] = useSession()
  return (
    <>
      <style global jsx>{`
      main {
        margin : auto;
        width:100%;
        max-width : 1545px;
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items:center
        }
        .containerResume {
          display : flex;
          align-items : center;
          margin : 0 375px;
        }
        .resume h2 {
          color : var(--darkGreen);
        }
        .resume {
          height: 331px;
          width: 586px;
          margin-right: 85px
        }
        .containerBaskets {
          display: flex;
          flex-direction: column;
          align-items: center;
          width:100%;
        }
        .containerBaskets button {
          margin-bottom: 51px;

        }
        h3 {
          text-align: center;
          font-weight: 400;
          font-size: 35px;
          margin-bottom: 20px;
          margin-top:35px;
        }
        
        .containerImg {
          display: flex;
          justify-content: center;
        }
        .containerImg img {
          width: 28%;
          margin: 38.5px
        }
        .navBaskets ul {
          justify-content: center;
        }

        .howWork {
          display: flex;
          flex-direction: column;
          text-align: center;


        }
        .howWork {
          width:1000px
        }
        .howWork h3 {
          margin-bottom: 16px;
        }
        .howWork h4{
          color: var(--lightGreen);
          margin-top: 0;
          margin-bottom: 23px;


        }
        .howWork p {
          margin-top : 0;
        }
        
        .ourProducers {
          display: flex;
          flex-direction: row;
          max-width: 1100px;
          margin-top: 90px;
        }
        .ourProducers iframe {
          border-radius: 66px;
          margin-left: 100px;
          height: 343px
        }
        .orangeContainer {
          height: 618px;
          width: 100%;
          background-image: url('orangeT.svg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

        }
       
      
      
      `}</style>
      <div >

        <main className={styles.main}>
          <div className="containerResume">
            <div className="resume">
              <h2>Le plaisir de la bonne cuisine sans la corvée des courses !</h2>
              <p>Des bons produits locaux pour concocter des recettes simples et délicieuses, livrés dans votre entreprise, à partir de X,XX € par repas.</p>
              <Button><a href="login">Je créé un compte</a></Button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="435" height="480" viewBox="0 0 875 970">
              <g id="IMG" fill="#fff" stroke="#1a1a1a" stroke-width="1">
                <rect width="875" height="970" stroke="none" />
                <rect x="0.5" y="0.5" width="874" height="969" fill="none" />
              </g>
            </svg>

          </div>

          <div className="containerBaskets">
            <h3>Nos paniers du moment</h3>
            <div className="navBaskets">
              <ul>
                <li>
                  <Button backgroundColor = 'var(--yellow)' width ="auto" margin="0 15px">Nos classiques</Button>
                </li>
                <li>
                  <Button backgroundColor = 'var(--yellow)' width ="auto" margin="0 15px">Nos végés</Button>
                </li>
                <li>
                  <Button backgroundColor = 'var(--yellow)' width ="auto" margin="0 15px">Nos lorem</Button> 
                </li>
                <li>
                  <Button backgroundColor = 'var(--yellow)' width ="auto" margin="0 15px">Nos lorem</Button>
                </li>
                <li>
                  <Button backgroundColor = 'var(--yellow)' width ="auto" margin="0 15px">Nos lorem</Button>
                </li>               
              </ul>
            </div>
            <div className="containerImg">
              <img src="daria.png" alt="" />
              <img src="julie.png" alt="" />
              <img src="ella.png" alt="" />
            </div>
            <Button>Voir tous les paniers</Button>
          </div>
          <div className="howWork">
            <h3>Comment ça marche</h3>
            <h4>C’est simple comme bonjour</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
               invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
               et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing  </p>
          </div>
          <svg width="1010" height="260">
            <rect width="1000" height="250" stroke="black" fill="white" />
          </svg>
          <div className="ourProducers">
            <div className="resumeProducer">
              <h3>Nos producteurs</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ducimus dicta distinctio quod, tempora neque atque deleniti deserunt quibusdam totam officiis sint. Illo ipsa rem rerum, mollitia fugiat vero sed.</p>
              <Button>Voir tous les paniers</Button>
            </div>
            <div className="videoProducer">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OVJEeXT78IE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            </div>
          </div>
          <div className="orangeContainer">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt at porro dignissimos voluptas, ipsa aut dolor natus commodi nihil placeat, temporibus laborum veniam, beatae atque ratione aliquid! Possimus, commodi.</p>
          


          </div>

          <p className={styles.description}>
            {session ? <span>Your JWT is {session.jwt}</span> : <span>Get started by click in <a href="/login">login</a>{' '}</span>}
          </p>
        </main>

      </div>
    </>
  )
}