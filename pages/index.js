import { useSession, signOut } from 'next-auth/client'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [session, loading] = useSession()
  return (
    <>
      <style global jsx>{`
      main {
        margin : auto;
        max-width : 1545px;
        }
        .container {
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
      
      `}</style>
      <div >

        <main className={styles.main}>
          <div className="container">
            <div className="resume">
              <h2>Le plaisir de la bonne cuisine sans la corvée des courses !</h2>
              <p>Des bons produits locaux pour concocter des recettes simples et délicieuses, livrés dans votre entreprise, à partir de X,XX € par repas.</p>
              <button></button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="435" height="480" viewBox="0 0 875 970">
              <g id="IMG" fill="#fff" stroke="#1a1a1a" stroke-width="1">
                <rect width="875" height="970" stroke="none" />
                <rect x="0.5" y="0.5" width="874" height="969" fill="none" />
              </g>
            </svg>

          </div>

          <p className={styles.description}>
            {session ? <span>Your JWT is {session.jwt}</span> : <span>Get started by click in <a href="/login">login</a>{' '}</span>}
          </p>
        </main>

      </div>
    </>
  )
}