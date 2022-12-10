import React from 'react'
// import { Link } from 'gatsby-link'
// import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// import ScrollAnimation from 'react-animate-on-scroll'
// import CookieConsent from "react-cookie-consent"
// import styled from "styled-components";
// import { StaticImage } from "gatsby-plugin-image"

export default class Installer extends React.Component {

  state = {
     isActive:false
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
  }

   render(){
       return(
           <div className="no-app">
           <div style={{textAlign:'center', marginTop:'1rem',}}>
           <button onClick={this.handleShow} style={{border:'1px solid', padding:'1rem', borderRadius:'12px'}}>TURN ON SUPPORT MODE</button>
             
             
             </div>

{this.state.isActive ? 
<>
  <div className="installwindow" style={{fontSize:'90%',  display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'500px', margin:'0 auto', padding:' .5rem', border:'0px solid #333', borderRadius:'12px', maxWidth:'600px', textAlign:'center' }}>
  
  
<div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'1px solid #333', borderRadius:'12px', backdropFilter:'blur(14px)', background:'rgba(0,0,0,0.60)', position:'relative', color:'#fff'}}>
      
<button aria-label="Close this popup" onClick={this.handleHide} style={{position:'absolute', right:'-5px', top:'-5px', fontSize:'24px'}}><AiOutlineCloseCircle /></button>

{/* <p className="" style={{maxWidth:'', textAlign:'center', fontSize:'160%'}}>One-Click Install - NO APP STORE NEEDED</p> */}

<p className="" style={{maxWidth:'', textAlign:'center', fontSize:'150%'}}>Simply click the "install" icon<br /> in your browser address bar
</p>

{/* <div style={{border:'0px solid red', display:'block', width:'100px', height:'100px', position:'absolute', bottom:'0', right:'0', zIndex:'-1', overflow:'hidden', }}><StaticImage src="../../static/assets/installed-bg.png" alt=""  />
</div> */}
  <span style={{fontSize:'150%'}}>- OR -</span>
  <br />
  <div style={{fontSize:'100%', textAlign:'', display:'', flexDirection:'', flexWrap:'nowrap', justifyContent:'', justifyItems:'center', verticalAlign:'middle', lineHeight:'', width:'', margin:'0 auto', padding:'', border:'0px solid #333', borderRadius:'12px', gap:'30px' }}>
    
  <div style={{fontSize:'16px', textAlign:'left', display:'flex',justifyContent:'space-around', gap:'40px' }}>

   <IoShareOutline style={{fontSize:'40px', marginLeft:'', marginRight:'', float:'',}} />
   
   <div style={{width:'100%'}}>1) &nbsp; Press the 'Share' button </div>
  </div>




  <div style={{fontSize:'16px', textAlign:'', display:'flex', justifyContent:'space-around', gap:'40px' }}>

   <FaRegPlusSquare style={{fontSize:'30px', marginLeft:'4px', marginRight:'', float:'',}} />
   
   <div style={{width:'100%'}}>2) &nbsp; Press 'Add to Home Screen'</div>
   </div>
   <br /> 
   <a href="/support/" className="" style={{textDecoration:'underline'}}>You can also visit the Support Portal</a>
   </div>

</div>
</div>
</>
  : null }
             
           </div>
)
}
}