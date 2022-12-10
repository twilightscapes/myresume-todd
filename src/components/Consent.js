
import * as React from "react"
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
// import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent";
// import { FaHandPointDown } from "react-icons/fa"
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from "styled-components"
const CustomBox = styled.div`
@media (max-width: 58em) {
.bounce{left:inherit !important;}
}

`

const Consent = () => (
<CustomBox style={{}}>


<CookieConsent
	debug={false}
	location="none"
	style={{ opacity:'1', padding:'.5rem', margin:'0 auto', border:'0px solid white', position:'relative', top:'0', zIndex:'0', display:'flex', alignSelf:'center', width:'90%', maxWidth:'800px', justifyContent:'center', color:'', background: 'rgba(0,0,0,0.50)', borderRadius:'12px'
   }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{fontSize: "13px", }}
    
    buttonText="Accept"
	buttonStyle={{justifyContent:'center', textAlign:'center', fontSize: "16px", fontWeight:'bold', borderRadius:'5px', color:'', top:'10px', position:'relative', margin:'0 0 0 0', padding:'.8rem 1rem', background:'transparent', border:'1px solid',
    // filter:'drop-shadow(1px 1px 10rem #fff)',
    boxShadow:' 0px 1px 6px 1px black',
    backdropFilter: 'blur(10px)',
    textShadow: '1px 2px 2px rgba(0,0,0,.9)'
 }}
    
    contentStyle={{margin:'0', padding:'0', border:'0px solid red'}}

    expires={364}
    cookieName="site-pref-cookie"
>
{/* <ScrollAnimation animateIn="swing" delay={600} initiallyVisible={true} animateOnce={false} animatePreScroll={false} style={{ display:'flex', alignItems:'center', zIndex:'1', width:'100%',}}> */}
{/* <FaHandPointDown className="" style={{fontSize:'80px', textAlign:'center', width:'100%', position:'absolute', top:'-80px', left:'32vw', margin:'0 auto', color:'#ccc', }} /> */}
{/* </ScrollAnimation> */}

    <div style={{color:'inherit', padding:'1rem', fontSize:'1.2rem', textAlign:'center',}}>
     I use cookies to optimize my site.{" "}<br />
    <span style={{ fontSize: "75%", color:'inherit', textDecoration:'underline' }}>
   <a className="donotsell" href="/privacy/">Do Not Sell My Personal Information</a>
    </span>
    </div>
    
</CookieConsent>
 
</CustomBox>
)

export default Consent


