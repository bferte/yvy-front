import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { Provider } from 'next-auth/client'
import { useState } from 'react'

import Layout from '../components/common/Layout'

import AppContext from '../components/AppContext'
import BasketResumeContext from '../components/BasketResumeContext'



function MyApp({ Component, pageProps }) {

const [size,setSize] = useState('')
const [type,setType] =useState('0')

const basketState = {
    size,
    setSize,
    type,
    setType
  }

  const [title1,setTitle1] = useState('')
  const [resume1,setResume1] = useState('')
  const [title2,setTitle2] = useState('')
  const [resume2,setResume2] = useState('')
  const [title3,setTitle3] = useState('')
  const [resume3,setResume3] = useState('')
  const [title4,setTitle4] = useState('')
  const [resume4,setResume4] = useState('')
  
  
  const basketResume = {
    title1,
    setTitle1,
    resume1,
    setResume1,
    title2,
    setTitle2,
    resume2,
    setResume2,
    title3,
    setTitle3,
    resume3,
    setResume3,
    title4,
    setTitle4,
    resume4,
    setResume4,
    


  }


 
  return (
    <BasketResumeContext.Provider value={basketResume}>
    <AppContext.Provider value={basketState}>
      <Provider session={pageProps.session}>
        {Component.auth
          ? <Auth><Layout><Component {...pageProps} /></Layout></Auth>
          : <Layout><Component {...pageProps} /></Layout>
        }
      </Provider>
    </AppContext.Provider>
    </BasketResumeContext.Provider>

  )
}

function Auth({ children }) {
  const [session, loading] = useSession()
  const isUser = !!session?.user
  const router = useRouter()
  useEffect(() => {
    if (loading) return // Do nothing while loading
    if (!isUser) router.push('/login')
    // If not authenticated, force log in
  }, [isUser, loading])
  if (isUser) {
    return children
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}



export default MyApp