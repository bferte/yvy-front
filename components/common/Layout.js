import Navbar from '../common/Navbar'
import Meta from '../common/Meta'

const Layout = ({ children }) => {
    return (
        <>
          <Meta/>
          <header>
            <Navbar/>
          </header>
        </>
     )
}

export default Layout