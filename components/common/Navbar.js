import Link from 'next/link'

import { useState, useEffect } from 'react'

import { useSession, signOut } from 'next-auth/client'




const Navbar = () => {
    const [session, loading] = useSession()

    const [currentLink, setCurrentLink] = useState('');

    let textColorHome
    let textColorConcept
    let textColor


    useEffect(() => {

        switch (currentLink) {
            case 'home':
                textColorHome = { color: 'var(--yellow)' };
                break;
            case 'concept':
                textColorConcept = { color: 'var(--yellow)' };
                break;
            case 'new':
                textColor = { color: 'green' };
                break;
            case 'about':
                textColor = { color: 'yellow' };
                break;
            case 'login':
                textColor = { color: 'cyan' };
                break;
            default:
                textColor = {}
        }

    }, [currentLink])




    return (
        <>
            <style global jsx>{`
            
            nav{
                display : flex;
                width:100%;
                align-items: center;
                justify-content: center
                
              
            }
            
            .logoNavbar {
                height : 84px;
                margin-top: 16px
            }
            .navbar {
                font-family : hero-new;
                font-size : 16px;
                font-weight: 600;
            }
            ul {
                display : flex;
                justify-content: space-around;
                list-style-type: none;

            }
            li {
                margin: 0 23px 0 23px;
                
            }
            li a {
                text-decoration : none;
                
            }
            li a:hover {
                color: var(--lightGreen)
            }

           

            `}</style>
            <nav className="navbar">
                <img className="logoNavbar" src="logoYvy.svg" alt="Logo YVY" />
                <ul>
                    <li><Link href="/"><a id='homeLink' style={textColorHome} onClick={() => setCurrentLink('home')}>Accueil</a></Link></li>
                    <li><Link href="/concept"><a style={textColorConcept} onClick={() => setCurrentLink('concept')}>Notre concept</a></Link></li>
                    <li><Link href="/baskets"><a>Nos paniers</a></Link></li>
                    <li><Link href="/"><a>Nos producteurs</a></Link></li>
                    <li><Link href="/"><a>Blog</a></Link></li>
                    <li>
                        <div>
                            {session && session.user ?
                                <div>
                                    <a href="/protected"> Profil Protected page</a>
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
                                <Link href="/login"><a>Connexion</a></Link>
                            }
                        </div>


                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar
/*
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
            */