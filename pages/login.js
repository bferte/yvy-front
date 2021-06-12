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
    const [codeCompany, setCodeCompany] =useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [codeError, setCodeError] = useState('')


    async function handleRegister() {
        const registerInfo = {
            username: email,
            email: email,
            password: password,
            codeCompany: codeCompany,
            firstName: firstName,
            lastName: lastName
        }
        console.log(registerInfo)

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

    const setAndCheckCompany = e => {
        if(e.value.length > 4 || e.value.length < 4) {
            setCodeError("Le code doit contenir 4 chiffres")
            setCodeCompany(e.value);

        } else {
            setCodeError('')
            setCodeCompany(e.value)

        }
    }

    


    return (

        <>
            <style global jsx>{`
            .loginContainer {
                width: 700px;
                height: 1170px;
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
            .inputLoginCodeCompany {
                width: 100%;
                margin: 38px 0 0 0;
                display: flex;
                align-items: center;
            }
            .inputLoginCodeCompany input {
                width: 30%;

            }
            .nameInput {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            .nameInput .inputLogin{
                width: 40%;
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
                    
                <Button
                    margin = "30px"
                    clickEvent={async () => {
                        const response = await signIn('credentials', {
                            redirect: false,
                            ...credentials
                        })
                        if (response.error) {
                            setError(response.error)
                        } else if (response.ok) {
                            router.push("/baskets")
                        }
                    }}
                >Je me connecte</Button>
                </div>
                <div className="inputContainer">
                    <h3>Inscription</h3>
                    <div className="inputLoginCodeCompany">
                        <div>
                           <label htmlFor="email">Code entreprise</label>
                        <p>Code de 4 chiffres donné par votre entreprise, il faut que celle-ci soit partenaire</p> 
                        </div>   
                        <div>
                            
                        </div>       
                        <input name='codeCompany' type='number' onChange={ e => setAndCheckCompany(e.target) } value={codeCompany}  />
                        
                    </div>
                    <span style={{color:'red',fontSize:"12px"}}>{codeError}</span>
                    <div className="inputLogin">
                        <label htmlFor="email">E-mail</label>
                        <input name='email' type='email' onChange={ e => setEmail(e.target.value) } value={email} placeholder="Email" />
                        {console.log(email)}
                    </div>
                    <div className="inputLogin">
                        <label htmlFor="password">Password</label>
                        <input name='password' type='password' onChange={ e => setPassword(e.target.value) } value={password} placeholder="Password" />
                    </div>
                    <div className="nameInput">
                        <div className="inputLogin">
                            <label htmlFor="firstName">Prénom</label>
                            <input name='firstName' type='text' onChange={ e => setFirstName(e.target.value) } value={firstName} placeholder="Prénom" />
                        </div>
                        <div className="inputLogin">
                        <label htmlFor="lastName">Nom</label>
                        <input name='lastName' type='text' onChange={ e => setLastName(e.target.value) } value={lastName} placeholder="Nom" />
                    </div>
                    </div>
                    
                    <Button
                    margin = "30px"
                    clickEvent={() => handleRegister() }
                >Je m'inscris</Button>
                </div>
            </div>

        </>
    )
}