import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import ScrollAnimation from 'react-animate-on-scroll'
import Consent from "../components/Consent"
// import { IoShareOutline } from 'react-icons/io5'
// import { Social } from "../components/social"
// import Install from "../components/Install-footer"
// import Icons from "../util/socialmedia.json"
// import { FaHandPointDown } from "react-icons/fa"

// import {
//   RiFacebookBoxFill,
//   RiTwitterFill,
//   RiLinkedinBoxFill,
//   RiYoutubeFill,
//   RiInstagramFill,
//   RiRssFill,
//   RiGithubFill,
//   RiTelegramFill,
//   RiPinterestFill,
//   RiSnapchatFill,
//   RiSkypeFill,
//   RiDribbbleFill,
//   RiMediumFill,
//   RiBehanceFill,
// } from "react-icons/ri"

import { Link } from "gatsby"





export function Footer() {
  // const { siteUrl } = useSiteMetadata();
  // const { menu1 } = useSiteMetadata();
  // const speedIt = "https://googlechrome.github.io/lighthouse/viewer/?psiurl=" + siteUrl + "%2F&amp;strategy=mobile&amp;category=performance&amp;category=accessibility&amp;category=best-practices&amp;category=seo&amp;category=pwa&amp;utm_source=lh-chrome-ext"

  const { siteUrl } = useSiteMetadata();
  const speedIt = "https://pagespeed.web.dev/report?url=" + siteUrl




  const { companyname } = useSiteMetadata()
 


  const { showfooter } = useSiteMetadata()







  return (


    showfooter ? (
  
<>


{/* <ScrollAnimation className="" animateIn="fadeIn" delay={50} initiallyVisible={false} animateOnce={false} animatePreScroll={false}> */}

{/* <ScrollAnimation className="" animateIn="bounce" delay={10} initiallyVisible={true} animateOnce={false} animatePreScroll={true}> */}

{/* </ScrollAnimation> */}






    <footer className="footerstyle no-app" style={{padding:'1rem 0', marginTop:'', position:'relative', zIndex:'', display:'flex', flexDirection:'column'}}>

    
    

    
      <div className="">


        {/* <Link state={{modal: true}} to="/contact/" className="navbar-item  button" style={{margin:'20px auto 2rem auto', padding:'1rem 2rem', textDecoration:'none', maxWidth:'250px', fontSize:'120%', textAlign:'center' }}>Contact Me</Link> */}



        
        {/* <Install /> */}
 <div >


 
 {/* <Social /> */}

        
        </div>

        
      </div>




      <nav className="footerlinks" aria-label="footer">
        <br />
      <Consent />
      <div style={{textAlign: 'center', margin: '2rem 10px 1rem 10px', justifyContent: 'center', fontSize: '.95rem', textDecoration:'none'}}><Link to="/">Home</Link> | <Link to="/disclaimer">Disclaimer</Link>  |  <Link to="/privacy">Privacy Policy</Link>  |  <Link to="/terms">Terms of Use</Link></div>
  

<div style={{textAlign: 'center', margin: '0 0 2rem 0', justifyContent: 'center', fontSize: '.75rem'}}>Copyright&copy; {(new Date().getFullYear())} {companyname}
<br /><br />
{/* <a href="https://myresume.site" target="_blank" rel="noreferrer">MyResume®</a> &nbsp; | &nbsp;  */}
<Link to="/login">Admin</Link> &nbsp; | &nbsp; <a href={speedIt} target="_blank" rel="noreferrer">Site Report</a>
</div>




<br />
<br />





      </nav>
   
    </footer>
    {/* </ScrollAnimation> */}
</>
    ) : (
      ""
    )



    
  )
}


