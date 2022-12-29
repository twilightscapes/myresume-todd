
import * as React from "react"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

// import Layout from "./layout"
// import Seo from "./seo"
import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}

input::placeholder {
  color: #fff !important;
  // filter: drop-shadow(0px 0px 6px var(--primary-color));
}

input{border:1px solid #fff;}





    @media (max-width: 58em) {


      .signbox input{margin-bottom:10px; margin-right:20px;}

    }


}

`


const NewsletterPage = () => (


<CustomBox style={{}}> 


<form  style={{width:'90%', margin:'0 auto', display:'flex', flexDirection:'column', justifyContent:'center', background: 'rgba(0,0,0,0.50)',
  backdropFilter: 'blur(4px)', border:'1px solid #000', borderRadius:'12px', textAlign:'center', alignSelf:'center', overflow:'hidden', color:'#fff'}}
          className="contact-form"
          action="/signedup/"
          name="ts-news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="news" />



            
              <div className="txtshadow" style={{fontSize:'120%', textAlign:'center', marginTop:'10px'}}><strong>Enter your email to connect</strong></div><br />
              
              {/* <span className="txtshadow" style={{fontSize:'85%'}}>Current NFT owners will be the only accounts created during initial launch phase<br /><br />Second Phase will open to invite only<br />Reserve Your Spot Below:</span><br /><br /> */}

             <div className="signbox" style={{display:'flex', gap:'10px'}}>
             
             

               <label style={{color:'#fff'}} htmlFor="email">
                 <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{}}/></label>
                      
            


  

            

            <button
              className="button"
              
              type="submit"
              style={{marginTop:'-8px', fontSize:'clamp(1rem, 1.3vw, 1.5rem)', whiteSpace:'nowrap'}}
            >
              connect{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>


            </div>


            <div style={{fontSize: '70%', padding: '0px 3%', margin:'30px 0 10px 0', textAlign: 'center', color:'#fff'}}>
            <Link state={{modal: true}} to="/privacy/" className="" style={{textAlign: 'center', padding: '15px',  textDecoration: 'underline', border:'0px solid yellow'}}>privacy policy - no spam!</Link>
           
            </div>
</form>


        
        
</CustomBox>
  
)

  export default NewsletterPage