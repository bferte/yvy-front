import { useSession, signOut } from 'next-auth/client'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [session, loading] = useSession()
  return (
    <div className={styles.container}>
      
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>Your logo</p>

          </div>
          <div className={styles.right}>
            {session && session.user ?
              <div className={styles.navlist}>
                <a href="/protected">Protected page</a>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >Logout
                        </a>
              </div>
              :
              <a className={styles.button} href="/login">Login</a>
            }
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {session ? <span>Welcome back <p>{session.user.username}</p> to </span> : 'Welcome to'}
          <p>Next.js! + Strapi + NextAuth app</p>
        </h1>
        <p className={styles.description}>
          {session ? <span>Your JWT is {session.jwt}</span> : <span>Get started by click in <a href="/login">login</a>{' '}</span>}
        </p>
      </main>
 
    </div>
  )
}