import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FiShare } from 'react-icons/fi';
// import { IoShareOutline } from 'react-icons/io5';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import Newsignup from "./newssign"
// import { StaticImage } from "gatsby-plugin-image"
// import ReactPlayer from 'react-player/lazy'
// import { Link } from "gatsby"
// import { AiOutlineAudioMuted } from "react-icons/ai"
// import Greeter from "./GreetMe"
import styled from "styled-components";


const CustomBox = styled.div`
// #installer {
//   animation: cssAnimation 0s 1s forwards;
//   visibility: hidden;
// }

// @keyframes cssAnimation {
//   to   { visibility: visible; }
// }




// @media (display-mode: standalone) {
//   /* All installed PWAs */
//   #installer{display: none !important;}
// }
	
// @media (hover: hover) {
// #installer{display: none !important;}
// }
	


`

// const current = new Date();
// const date = `${current.getMonth()+2}/${current.getDate()+2}/${current.getFullYear()}`;

const InstallDiscount = () => (
<>


<CustomBox style={{}} className="">

<>


<CookieConsent
  id="consenter"
	debug={false}
	location="none"
  className=""
	style={{ display:'flex', flexDirection:'column', color:'inherit',alignItems:'center',  textAlign:'center', justifyContent:'center', margin:'0', top:'', maxWidth:'', position:'', border:'0px solid red',
  overflow:'hidden',
  background:'rgba(0,0,0,.7)',
  borderRadius:'12px',
  padding:'0',
  height:'auto',
  filter:' drop-shadow(0px 0px 10px rgba(0,0,0,.9))',
}}
    buttonText="Don't show again"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "16px", position:'relative', bottom:'20px',  right:'', display:'flex', flexDirection:'column', justifyContent:'center', margin:'0 auto', color:'#fff', fontWeight:'normal', padding:'4px 50px', border:'0px solid #666'}}
    expires={30}
    cookieName="web-app-install-cookie"
>


{/* <ReactPlayer
          className='playerpp1'
          url="https://www.youtube.com/embed/S5S6s5dZXNM"
          width="100%"
          height="50%"
          style={{left:'', position:'', zIndex:'', display:'', width:'100%', minHeight:'30vh', alignSelf:'', placeContent:'', justifyContent:'', margin:'0 auto', border:'0px solid blue'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:5,  }
            },
          }}
          loop
          playsinline
          /> */}


<div className="" style={{marginTop:'', padding:'0', border:'0px solid #555',  color:'#fff', textAlign:'center', position:'relative',  }}>



	{/* <p style={{fontSize:'clamp(.9rem, 1.5vw, 2rem)', textAlign:'center'}}>
Looking for innovative design in a top-performing website app?</p> */}

<p style={{fontSize:'clamp(1.2rem, 2vw, 3.8rem)', fontWeight:'bold', textAlign:'center', textShadow:'1px 1px 0 #666'}}>
  Let's create something <span>great together</span></p>
<Newsignup />
    



    







 








  
  {/* <Link className='button' state={{modal: true}} to="/contact/" style={{color:''}}>HIRE ME!</Link> */}
  



 
    

 



  
    </div>
    
    
</CookieConsent>
{/* </div> */}

{/* </div> */}
</>


</CustomBox>
</>
)

export default InstallDiscount