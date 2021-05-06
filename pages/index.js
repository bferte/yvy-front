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
        .resume h2 {
          color : var(--darkGreen);
        }
      
      `}</style>
      <div >

        <main className={styles.main}>
          <div className="container">
            <div className="resume">
              <h2>Le plaisir de la bonne cuisine sans la corvée des courses !</h2>
            </div>
          </div>

          <p className={styles.description}>
            {session ? <span>Your JWT is {session.jwt}</span> : <span>Get started by click in <a href="/login">login</a>{' '}</span>}
          </p>
        </main>

      </div>
    </>
  )
}