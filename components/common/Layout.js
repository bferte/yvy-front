import Navbar from '../common/Navbar'
import Meta from '../common/Meta'
import Footer from '../common/Footer'





const Layout = ({ children }) => {


    return (
       
      <>
      
        <div className="root">
          <Meta/>
          <header>
          
            <Navbar/>
            
          </header>
          { children }
          
        </div>
        <Footer/>
      </>  
     )
}

export default Layout