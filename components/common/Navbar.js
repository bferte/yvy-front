import Link from 'next/link'




const Navbar = () => {

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
                color : green
            }

            li#homeLink {
                color: #EFAA45
            }

            `}</style>
            <nav className="navbar">
                <img className="logoNavbar" src="logoYvy.svg" alt="Logo YVY"/>
                <ul>
                    <li><Link href="/"><a style={{ color: 'var(--yellow)' }}>Accueil</a></Link></li>
                    <li><Link href="/concept">Notre concept</Link></li>
                    <li><Link href="/baskets">Nos paniers</Link></li>
                    <li><Link href="/">Nos producteurs</Link></li>
                    <li><Link href="/">Blog</Link></li>
                    <li><Link href="/">Connexion</Link></li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar