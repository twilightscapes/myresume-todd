import React, { } from "react"
// import { SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
// import { IoHandLeft } from "react-icons/io5"
// import { FaRegPlusSquare } from 'react-icons/fa';
// import { IoShareOutline } from 'react-icons/io5';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
import Theme from "../components/theme"
import { Seo } from "./seo"
import "../styles/reset.css"
// import "../styles/variables.css"
import "../styles/global.css"
// import "../assets/scss/style.scss"
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


// import '@fontsource/roboto'

// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'

// import Consent from './Consent'
import { useSiteMetadata } from "../hooks/use-site-metadata"
// 
// import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"







export function Layout({ children }) {

  

  const CustomBox = styled.div`

 




`

  const { iconimage } = useSiteMetadata()
  const { menu1 } = useSiteMetadata()
  // const { menu2 } = useSiteMetadata()
  const { menu3 } = useSiteMetadata()
  const { font1 } = useSiteMetadata()
  // const { siteColor } = useSiteMetadata()
  

  const fontUrl = "https://fonts.googleapis.com/css?family=" + font1 + "&display=swap"

  // const [isVisible, setIsVisible] = useState(false);
  // const toggleVisible = () => {
  //   setIsVisible(!isVisible);
  // };

  return (
<CustomBox style={{}}>
<>
<Helmet>

<link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 

{/* <style>
body::after{
  background:{sitecolor}rgba(42, 75, 85, 0.2);
}
</style> */}

{ !font1 ? (
  
  document.body.style = 'background: red;'

  ) : (


    <link id="yyy" rel="stylesheet"
          href={fontUrl} />

  )} 
  
  


</Helmet>



      <Seo />



      <ModalRoutingContext.Consumer closeTimeoutMS={300}>
    {({ modal, closeTo }) => (
      <div style={{overflow:'', display:'flex', justifyContent:'center'}}>
        {modal ? (
          <>
          <div style={{position:'fixed', top:'5vh', right:'14vw', zIndex:'2', color:'inherit !important', fontSize:'30px'}}>
          <Link state={{noScroll: true }} to={closeTo} style={{color:'inherit !important'}}>
            <AiOutlineClose />
          </Link>
          </div>
          <Link to="../" className="print" style={{position:'fixed', bottom:'40px', border:'0px solid red', background:'rgba(0,0,0,0.70) ', width:'', margin:'0 auto', textAlign:'center', textDecoration:'underline', padding:'.5rem 2rem', display:'flex', placeContent:'center', justifyContent:'center',borderRadius:'12px 12px 0 0'}}>Return Home</Link>
          </>
        ) : (
""
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>



  
{/* <header name="pagetop" className={isVisible ? 'left' : ''} > */}
<header name="pagetop" className="">

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />

  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle" style={{display:'none'}}>
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'80px', color:'#fff', borderRadius:'12px'}}>
<StaticImage className="" src="../../static/assets/icon-512x512.png" alt="Logo" style={{borderRadius:'12px'}} /></div>
  </label>

  {/* <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle popped">
<div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 2px #000'}}>MENU</div>
  </label> */}


 <label aria-label="Background clicks close menu" id="menubgcloser" htmlFor="openSidebarMenu" className="backdrop1" ></label>

 <div id="sidebarMenu" className="" style={{minWidth:'', width:''}}>
  

  <ul className="sidebarMenuInner post-card" style={{maxWidth:'250px', position:'absolute', right:'', display:'', justifyContent:''}}>

     {/* <li className="carta" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
<object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'', background:'transparent'  }} alt="VidSocks Animated Logo" title="VidSocks Animated Logo" >VidSocks Animated Logo</object>
 </li> */}
 <li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>

 {/* <Link to="/">
<img src={iconimage} alt="Logo" width="100%" height="100%" />
</Link> */}

<Link to="/" name="homereturn" title="return to home" style={{position:'absolute', display:'block', width:'180px', height:'180px', border:'0px solid'}}></Link>

{/* <img src={iconimage} alt="Logo" width="100%" height="100%" /> */}


{/* <Link to="/">
<StaticImage src="../../static/assets/icon-512x512.png" alt="Logo" width="100%" height="100%" />
</Link> */}

<object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'', background:'transparent'  }} alt="VidSocks Animated Logo" title="VidSocks Animated Logo" >VidSocks Animated Logo</object>
{/* <Link to="/">
<LogoText style={{width:'100%', height:''}} />
</Link> */}
 </li>



  <li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/contact/">
 {menu1}
</Link>
</li>

{/* <li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/about/">
 {menu2}
</Link>
</li> */}

      <li className="carto" style={{textAlign:'center', paddingTop:'1rem'}}>
              <Link title="Examples" className="navbar-item txtshadow neonText" to="/posts/">
              {menu3}
              </Link>
      </li>

 
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {" "} Continue Choosing 
</button>
</div>
      </li>
   
</ul>
    </div>
</header>







        {children}
        <div className="usability" style={{ display:'flex', width:'100%', margin:'0 auto', justifyContent:'center', border:'0px solid blue', textAlign:'center'}}>
{/* <span style={{fontSize:'80%'}}>Site Preferences:</span> */}

  <div style={{position:'absolute', bottom:'0', zIndex:'2', justifyContent:'', padding:'2px 12px', background:'rgba(0,0,0,0.60)', borderRadius:'12px 12px 0 0', width:'200px', margin:'0'}}>
  {/* <button type="button" className="" onClick={toggleVisible} style={{wordWrap:'normal', color:'#fff'}}>
  <IoHandLeft style={{float:'left', marginRight:'8px', fontSize:'20px'}} />Left-handed?
</button> */}
<Theme  style={{}} />
    </div>

  </div>
      
        
  </>
  </CustomBox>
  )
}


