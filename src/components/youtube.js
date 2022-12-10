import React from "react"
// import { Link } from "gatsby"

// import { ProductListing } from "../components/product-listing"
// import GoBack from "../components/goBack"
import styled from "styled-components"
// import ShareSocial from '../components/share' 
// import { StaticImage } from "gatsby-plugin-image"
// import { Helmet } from "react-helmet"
// import { Seo } from "../components/seo"
// import { FaRegPlusSquare } from 'react-icons/fa';
// import { IoShareOutline } from 'react-icons/io5';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// import { ImPlay } from "react-icons/im"
// import { RiSendPlane2Line } from "react-icons/ri"
// import Install from "../components/install-discount"
// import SVG from "../../static/assets/crude-addiction.svg"
// import ScrollAnimation from 'react-animate-on-scroll'
// import GiftShop from "../components/giftshop"
// import PhotoMenu from "../components/animated-photos-menu"
// import CommentBox from "../components/commentbox"
import ReactPlayer from 'react-player/lazy'
// import ReactPlayer from '../components/react-player'
const CustomBox = styled.div`
@media (max-width: 48em) {
}
@media (min-width: 58em) {
}
`







        
        export default class BlogPost extends React.Component {
          
          
          state = {
            youtubelink: "",
            isActive:true,

          }

          
          handleInputChange = event => {
            const target = event.target
            const value = target.value
            const name = target.name
            this.setState({
              [name]: value,
            })
   
          
 
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

          handleSubmit = event => {
            event.preventDefault()
          }


          render() {

          
            const Url = this.state.youtubelink

            const urlNoProtocol = Url.replace(/^.*((youtu.be\/))/i, "")
            const FinalUrl = "https://www.youtube.com/embed/" + urlNoProtocol + "?controls=1&amp;showinfo=1&amp;color=white&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=0&amp;playlist=" + urlNoProtocol + ""

            function Iframed() {
  
              return (
        
                

                <ReactPlayer
  className='react-player66'
      url={FinalUrl}
      width='100%'
      height='100%'
      playing
      fullscreen
      color="white"
    />

              )
            }

            
            return (

<>





{urlNoProtocol ? (
     <Iframed />
        ) : (
          ""
        )}




{!this.state.isActive ? 

<>



    
    
    </>
  : 

<div className="" style={{display:'flex', justifyContent:'center', width:'90%', margin:'0 auto',}}>
      
    <form className="youtubeform frontdrop" onSubmit={this.handleSubmit} style={{ padding:'2rem 12%', border:'1px solid #333', borderRadius:'12px', width:'100%', maxWidth:'800px', margin:'0 auto', zIndex:'15', position:'relative', bottom:'40vh',transition:' all 0.85s', animation:'fade .8s forwards'}}>

<p className="headline" style={{fontSize:'20px', color:'#fff', fontWeight:'bold', textAlign:'center'}}>Paste YouTube Link Here:
</p>
<input
          id=""
          type="text"
          name="youtubelink"
          value={this.state.youtubelink}
          onBlur={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          onLoad={this.handleInputChange}
          // onChangeCapture={this.handleShow}
          // value="https://youtu.be/Ahas9vPsFW8"
          placeholder="example: https://youtu.be/cVsQLlk-T0s"
          autoFocus
          className="youtubelinker"
        />
        
</form>
    
    </div>
  }
  











     </>

    )
    }
}