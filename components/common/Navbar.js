import Link from 'next/link'

import { useState } from 'react'

import { useSession, signOut } from 'next-auth/client'
import LinkMenu from './LinkMenu'
import Button from './Button'




const Navbar = () => {
    const [session, loading] = useSession()
    const [activeKey, setActiveKey] = useState('')


    




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
                width : 200px;
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
                align-items: center;
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
                    <li><LinkMenu activeKey={activeKey} href="/" name='home' onClick={ () => setActiveKey('home')}>Accueil</LinkMenu></li>
                    <li><LinkMenu activeKey={activeKey} href="/concept" name='concept' onClick={ () => setActiveKey('concept')}>Notre concept</LinkMenu></li>
                    <li><LinkMenu activeKey={activeKey} href="/espacePro" name='espacePro' onClick={ () => setActiveKey('baskets')}>Espace pro</LinkMenu></li>
                    <li><LinkMenu activeKey={activeKey} href="/producers" name='producers' onClick={ () => setActiveKey('producers')}>Nos producteurs</LinkMenu></li>
                    <li><LinkMenu activeKey={activeKey} href="/blog" name='blog' onClick={ () => setActiveKey('blog')}>Notre blog</LinkMenu></li>
                    <li>
                        <div>
                            {session && session.user ?
                                <div>
                                    <a href="/protected"> Profile </a>
                                    <a
                                        href={`/api/auth/signout`}
                                        //className={styles.button}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            signOut()
                                        }}
                                    >Logout
                                    </a>
                                </div>
                                :
                                <Button width='126px'>Connexion</Button>
                            }
                        </div>


                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar
