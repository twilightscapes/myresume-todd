/** @jsx jsx */
import { jsx } from "theme-ui"
// import React, { } from "react"
// import { SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
// import { IoHandLeft } from "react-icons/io5"
// import { FaRegPlusSquare } from 'react-icons/fa';
// import { IoShareOutline } from 'react-icons/io5';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
// import Theme from "../components/theme"
import { Seo } from "./seo"
import "../assets/scss/reset.css"
// import "../styles/variables.css"
// import "../styles/global.css"
// import "../styles/user.scss"
import "../assets/scss/style.scss"
// import LogoText from "../../static/assets/logotext.svg"
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { FaHandPointDown } from "react-icons/fa"
// import Bug from "../../static/assets/icon-512x512.png"

// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import Fullscreen from "../components/FullScreen"
// import Menu from "../components/menu1"

import SignUp from "../components/install-discount"
// import ScrollAnimation from 'react-animate-on-scroll'

import { AnchorLink } from "gatsby-plugin-anchor-links"
// import SiteLogo from "../../static/assets/logo.svg"
// import Bug from "../../static/assets/logo.svg"
import Theme from "../components/theme"

// import '@fontsource/roboto'

// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'

// import Consent from './Consent'
import { useSiteMetadata } from "../hooks/use-site-metadata"


// import { BiLeftArrow } from "react-icons/bi"
// import { navigate } from "gatsby";
import styled from "styled-components"
import { Helmet } from "react-helmet"
// import { StaticImage } from "gatsby-plugin-image"






export function Layout({ children }) {
  const CustomBox = styled.div`

 




`

// const SiteLogo = iconimage

// const SiteLogo = "../../assets/icon-512x512.png"

  const { companyname } = useSiteMetadata()
  const { iconimage } = useSiteMetadata()

  const { showNav } = useSiteMetadata()
  const { showNav2 } = useSiteMetadata()
  const { showInfo } = useSiteMetadata()
  // const { showFeature } = useSiteMetadata()
  const { showPosts } = useSiteMetadata()
  const { showResume } = useSiteMetadata()
  // const { showSocial } = useSiteMetadata()
  const { showSkills } = useSiteMetadata()
  // const { showCover } = useSiteMetadata()
  // const { showfooter } = useSiteMetadata()
  const { showPopup } = useSiteMetadata()
  const { menu1 } = useSiteMetadata()
  const { menu2 } = useSiteMetadata()
  const { menu3 } = useSiteMetadata()
  const { menu4 } = useSiteMetadata()
  const { font1 } = useSiteMetadata()
  // const { siteColor } = useSiteMetadata()
  
  const navStyle = {

    bg: "siteColor",

}


  const fontUrl = "https://fonts.googleapis.com/css?family=" + font1 + "&display=swap"

  // const [isVisible, setIsVisible] = useState(false);
  // const toggleVisible = () => {
  //   setIsVisible(!isVisible);
  // };

  return (
<CustomBox style={{}}>

<Helmet>

<link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 

{/* <style>
body::after{
  background:{sitecolor}rgba(42, 75, 85, 0.2);
}
</style> */}

{ !font1 ? (
  
''

  ) : (


    <link id="yyy" rel="stylesheet"
          href={fontUrl} />

  )} 
  
  


</Helmet>



      <Seo />



      <ModalRoutingContext.Consumer closeTimeoutMS={300}>
    {({ modal, closeTo }) => (
 

      <div style={{overflow:'', display:'flex', justifyContent:'center', border:'0px solid yellow !important'}}>
        {modal ? (
          
     
          <div id="closeicon" style={{position:'fixed', top:'80px', right:'10vw', zIndex:'2', color:'inherit !important', }}>
          <Link state={{noScroll: true }} to={closeTo} style={{color:'inherit !important',  }}>
            <AiOutlineClose style={{fontSize:'', textShadow:'4px 4px 0px #111', filter:'drop-shadow(2px 2px 0px #000)', fontWeight:'bold', border:'2px solid', width:'30px', height:'30px', borderRadius:'100%'}}/>
            {/* <span style={{fontSize:'0px', textShadow:'4px 4px 4px #111', filter:'drop-shadow(2px 2px 4px #000) !important', fontWeight:'bold', border:'2px solid', width:'50px', borderRadius:'100%'}}>X</span> */}
          </Link>
          </div>

        ) : (
""
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>



  
{/* <header name="pagetop" className={isVisible ? 'left' : ''} > */}

{showNav ? (

<ul sx={navStyle} id="menu" className="menu print" style={{position:'fixed', width:'100vw', top:'0', zIndex:'10', display:'flex', justifyContent:'space-around', fontSize:'clamp(.8rem, 2.3vw, 2.5rem)', gap:'10px', textAlign:'center',  color:'#ccc', boxShadow:'0 0 24px rgba(0,0,0,.9)', padding:'0 .5rem', alignItems:'center', minHeight:'70px'}}>
      
      <li className="grad logo" style={{position:'relative', maxHeight:'60px', width:'auto', display:'flex', justifyContent:'center'}}>
            <AnchorLink to="/#top" name="homereturn" style={{position:'', display:'block', maxWidth:'150px', height:'60px', border:'0px solid'}}  aria-label="Link to Top" title="Back to Top">
            {iconimage ? (
      <img className="" src={iconimage} alt={companyname} style={{maxHeight:'60px', border:'none'}} />
                ) : (
                  <div style={{fontWeight:'bold',}}>{companyname}</div>
                )}
            </AnchorLink>
          </li>
      
      
{/* <li>
   <ul className="has-app" style={{position:'', right:'1rem', top:'80px', display:'flex', flexDirection:'column', gap:'4px'}}>
            <li className="has-app1" style={{position:'relative', display:''}}>
            <Link to="/login" className="" style={{color:'#fff',fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)',  width:'', justifyContent:'center', fontWeight:'', }}>Admin</Link>
              </li>




      <li className="has-app" order="5" style={{display:'',}}>
 <Link state={{modal: true}} to="/notes" className="" style={{fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)',}}>Notes</Link>
 </li>
</ul>
</li>     */}




          {showInfo ? (
            <li className="" style={{position:'relative',}}>
              <AnchorLink aria-label="Menu 1" className="navbar-item" to="/#info" style={{paddingRight:'',}}>
              {menu1}
              </AnchorLink>
              </li>
) : (
  ""
)}
      





{/* <li className="has-app" order="5" style={{display:'none',}}>
 <Link state={{modal: true}} to="/posts" className="navbar-item" style={{paddingRight:'',}}>{menu2}</Link>
 </li> */}


      {showPosts ? (
            <li className="" style={{position:'relative',}}>
            <AnchorLink ariaLabel="Menu 2" className="navbar-item" to="/#posts" style={{paddingRight:'',}}>
            {menu2}
            </AnchorLink>
            </li>
            ) : (
  ""
)}

       
{showResume ? (
            <li className="" style={{position:'relative',}}>
              <AnchorLink ariaLabel="Menu 3" className="navbar-item" to="/#resume" style={{paddingRight:'',}}>
              {menu3}
              </AnchorLink>
              </li>
            ) : (
              ""
            )}



{showSkills ? (
              <li className="" style={{position:'relative',}}>
              {/* <AnchorLink to="/#contact" className="navbar-item" style={{paddingRight:'',}}>
                Contact <span className="mobilehide">Me</span>
              </AnchorLink> */}
      
              <AnchorLink className="navbar-item" to="/#skills" style={{paddingRight:'',}}>{menu4}</AnchorLink>
              </li>

              ) : (
  ""
)}


<li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center', padding:'5px 0 0 0' , background:'rgba(0,0,0,0)' }}>
  
  <Theme  style={{padding:'0'}} />
  </li>
            
           
      
            </ul>


) : (
  ""
)}

<header className="print" style={{}} >





      










{showNav2 ? (

<>
<input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
<>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
  <label htmlFor="openSidebarMenu" className="backdrop1" ></label>

<label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'500px', color:'#fff', fontWeight:'bold', border:'0px solid blue'}}>

{/* <Bug className="bug" style={{fontSize:'38px', maxWidth:'', opacity:'1', margin:'0 0 0 0', width:'100%', display:'none' }}/>  */}
{iconimage ? (
      <img className="" src={iconimage} alt={companyname} style={{maxHeight:'60px', maxWidth:'120px', border:'none'}} />
                ) : (
                  <div style={{fontWeight:'bold', color:'yellow'}}>companyname</div>
                )}

</div>
  </label>

  





   <div id="sidebarMenu" style={{minWidth:'', width:'',}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}

  

    <ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', right:'0', display:'', justifyContent:''}}>

    <li className="grad" style={{position:'relative', maxHeight:'100px', width:'auto', display:'flex', justifyContent:'center'}}>
            <AnchorLink to="/#top" name="homereturn" style={{position:'', display:'block', maxWidth:'150px', height:'60px', border:'0px solid'}}  aria-label="Link to Top" title="Back to Top">
            {iconimage ? (
      <img className="" src={iconimage} alt={companyname} style={{maxHeight:'60px', border:'none'}} />
                ) : (
                  <div style={{fontWeight:'bold'}}>companyname</div>
                )}
            </AnchorLink>
          </li>
      
      

   
            






          
          {showInfo ? (
            <li className="no-app" style={{position:'relative',}}>
              <AnchorLink className="navbar-item" to="/#info" style={{paddingRight:'',}}>
              {menu1}
              </AnchorLink>
              </li>
) : (
  ""
)}
      


      {showPosts ? (
            <li className="" style={{position:'relative',}}>
            <AnchorLink className="navbar-item" to="/#posts" style={{paddingRight:'',}}>
            {menu2}
            </AnchorLink>
            </li>
            ) : (
  ""
)}

       
{showResume ? (
            <li className="" style={{position:'relative',}}>
              <AnchorLink className="navbar-item" to="/#resume" style={{paddingRight:'',}}>
              {menu3}
              </AnchorLink>
              </li>
            ) : (
              ""
            )}



{showSkills ? (
              <li className="" style={{position:'relative',}}>
              {/* <AnchorLink to="/#contact" className="navbar-item" style={{paddingRight:'',}}>
                Contact <span className="mobilehide">Me</span>
              </AnchorLink> */}
      
              <AnchorLink className="navbar-item" to="/#skills" style={{paddingRight:'',}}>{menu4}</AnchorLink>
              </li>

              ) : (
  ""
)}



<li className="has-app" order="5" style={{display:'none',}}>
 <Link state={{modal: true}} to="/notes" className="navbar-item" style={{paddingRight:'',}}>Notes</Link>
 </li>

 <li className="has-app" style={{position:'relative', display:'none'}}>
            <Link to="/login" className="navbar-item" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Admin</Link>
              </li>


      <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'center', verticalAlign:'center', padding:'5px 0 0 0' , background:'rgba(0,0,0,0)' }}>
      <Theme  style={{padding:'0'}} />
   {/* <Link className="sherlock" to="/search/" style={{marginRight:'0', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link>
   <CartButton quantity={quantity} /> */}
        </li>

    </ul>

  </div>
  </>

) : (
  ""
)}
      

      {/* <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast> */}
 
      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     

     

{/* <div id="secondMenu" className="" style={{}}><Install /></div> */}

{showPopup ? (
//  <ScrollAnimation className="signup" animateIn="bounceInDown" delay={5000} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute', top:'15vh', zIndex:'1', margin:'0 auto', padding:'',  width:'100vw', textAlign:'',}}>
//  <div style={{position:'relative', bottom:'', margin:'70px auto 0 auto', padding:' 0',  maxWidth:'500px', zIndex:'', textAlign:'', borderRadius:'12px',}}>
//  <SignUp />
//    </div>
//  </ScrollAnimation>

<div className="signup popper"
  style={{
  position:'fixed',
  top:'15vh',
  left:'20vw',
  right:'20vw',
  zIndex:'1',
  margin:'70px auto 0 auto',
  padding:' 0',
  maxWidth:'500px',
  borderRadius:'12px',
  // display:'grid',
  // placeSelf:'center',
  }}>
<SignUp />
  </div>

      ) : (
        ""
      )}

</header>







        {children}


      

        
 
  </CustomBox>
  )
}


