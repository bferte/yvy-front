import Link from 'next/link'

import { useState, useEffect } from 'react'

import { useSession, signOut } from 'next-auth/client'
import LinkMenu from './LinkMenu'
import Button from './Button'




const Navbar = () => {
    const [session, loading] = useSession()
    const [activeKey, setActiveKey] = useState('')

    const [scrollStart,setScrollStart] = useState('true')
    const [currentScroll, setCurrentScroll] = useState('')
    const [hidde, setHidde] = useState(false)

    /* Visibility navbar */

    /*
    const [prevScrollpos, setPrevScrollpos] = useState('');
    const [visible, setVisible] = useState(true); */
/*
    handleScroll = () => {
        setPrevScrollpos();
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;


    }

    useEffect(() => {
        setPrevScrollpos(window.pageYOffset);
        console.log(prevScrollpos)

        window.addEventListener("scroll", this.handleScroll);


        return function cleanup()
        {
            window.removeEventListener("scroll", this.handleScroll);

        }
        

    }, [])
*/

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setCurrentScroll(window.pageYOffset)

            
            if (currentScroll > window.pageYOffset) {
                setHidde(false)
            } else {
                setHidde(true)
            }

            


/*
            if (window.pageYOffset > 10) {
                //console.log(currentScroll)

                setHidde(true)
            }
            */
            
            //header.classList.add("hidden");
  


        })
        
    })

    return (
        <>
            <style global jsx>{`
            
            nav{
                display : flex;
                width:100%;
                align-items: center;
                justify-content: center;
                position : fixed;
                left:0;
                right:0;
                top:0;
                transition: top 0.3s;
                transition-delay: 0.2s;
                z-index:10;
                
              
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

                transition: top 0.6s;

            }
            .navbar--hidden {
                top: -100px;
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

            .bgWhite {
                background-color : var(--white);
            }

           

            `}</style>
            <nav className={`navbar${hidde ? " navbar--hidden" : scrollStart ? " bgWhite" : ""}`}>
                <img className="logoNavbar" src="logoYvy.svg" alt="Logo YVY" />
                <ul>
                    <li><LinkMenu activeKey={activeKey} href="/" name='home' onClick={ () => setActiveKey('home')}>Accueil</LinkMenu></li>
                    <li><LinkMenu activeKey={activeKey} href="/#howWork" name='concept' onClick={ () => setActiveKey('concept')}>Notre concept</LinkMenu></li>
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
                                <a href="/login"><Button width='126px'>Connexion</Button></a>
                            }
                        </div>


                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar
