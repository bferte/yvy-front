import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from '../components/common/Button'

export default function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' })
    const [loginError, setError] = useState('')
    const router = useRouter()
    function handleUpdate(update) {
        setCredentials({ ...credentials, ...update })
    }

    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        const registerInfo = {
            username: email,
            email: email,
            password: password
        }

        const register = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })

        const registerResponse = await register.json();
        console.log(registerResponse)
    }

    


    return (

        <>
            <style global jsx>{`
            .loginContainer {
                width: 700px;
                height: 900px;
                box-shadow: 0px 3px 20px #00000029;
                border-radius: 70px;
                padding: 71px 84px;
            }

            h3 {
                font-size: 34px;
                font-family: var(--font1);
                color: var(--darkGreen);
                margin-bottom: 0;
                
            }
            .inputContainer {
                display: flex;
                justify-content: center;
                align-items:center;
                flex-direction: column;
                
            }
            .inputLogin {
                width: 100%;
                margin: 38px 0 0 0;

            }
            label {
                font-family: var(--font2);
                font-size: 20px;
                color: var(--darkGreen);
                text-align:left;
                display:block;
                font-weight: 500;
            }
            input {
                width:100%;
                background-color: rgba(123, 170, 104, 0.3);
                height: 49px;
                padding: 0px 32px;
                border-radius: 50px;
                border: none;
                font-size: 17px;
                
                color: var(--textBlack);
                
            }
            



        
            `}</style>
            <div className="loginContainer">
                <div className="inputContainer">
                    <h3>Connexion</h3>
                    <div className="inputLogin">
                        <label htmlFor="username">E-mail</label>
                        <input name='username' type='email' onChange={(e) => handleUpdate({ username: e.target.value })} />
                    </div>
                    <div className="inputLogin">
                        <label htmlFor="password">Password</label>
                        <input name='password' type='password' onChange={(e) => handleUpdate({ password: e.target.value })} />
                    </div>
                    <span>{loginError}</span>
                    <button
                        onClick={async () => {
                            const response = await signIn('credentials', {
                                redirect: false,
                                ...credentials
                            })
                            if (response.error) {
                                setError(response.error)
                            } else if (response.ok) {
                                router.push("/")
                            }
                        }}
                    >
                        Sign in
                </button>
                </div>
                <div className="inputContainer">
                    <h3>Inscription</h3>
                    <div className="inputLogin">
                        <label htmlFor="email">E-mail</label>
                        <input name='email' type='email' onChange={ e => setEmail(e.target.value) } value={email} placeholder="Email" />
                        {console.log(email)}
                    </div>
                    <div className="inputLogin">
                        <label htmlFor="password">Password</label>
                        <input name='password' type='password' onChange={ e => setPassword(e.target.value) } value={password} placeholder="Password" />
                    </div>
                    <button onClick={() => handleRegister() }>Je m'inscris</button>
                </div>
            </div>

        </>
    )
}