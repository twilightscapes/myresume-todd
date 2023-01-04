import * as React from "react"
// import { graphql } from "gatsby"
import { Layout } from "../components/layout"
// import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
// import { FaHandPointDown } from "react-icons/fa"
// import CommentBox from "../components/commentbox"

import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
// import ScrollAnimation from 'react-animate-on-scroll'
import { SRLWrapper } from "simple-react-lightbox"

import styled from 'styled-components'

const CustomBox = styled.div`
.intro{height:100% !important;}

.intro:before{
	content: "About Todd Lambert";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}




// .speech:after {
// 	content: '';
// position: absolute;
// top: 30%;
// right: -48px;
// width: 0;
// height: 0;
// 	border: 60px solid transparent;
// 	border-left-color: inherit;
// 	border-right: 0;
// 	border-bottom: 0;
// 	 z-index:2;
// }

.outer .container{width:90%; height:auto; margin:1rem auto; padding:1rem; border-radius:10px;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.circle{clip-path: circle(30vw at center); background-color:#222;}



p{line-height:150%;}


body.light .speech p span{color:#fff;}





@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important}


.split div:first-child{order:2}
.split div:last-child{order:1}
.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:1}
.split.nowrap div:last-child{order:2}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}

.split.nowrap .speech:after {
position: absolute;
top: 50%;
right: -20px;
width: 0;
height: 0;
	border: 20px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.intro:before{font-size:200%;}

}

@media (min-width: 58rem) {
	.outer{padding:0 10% !important; /* width:50%; */}
	.split1{border:2px solid red !important}
	}








`


const options = {
       settings: {
         autoplaySpeed: 3000,
         // boxShadow: '0px 0px 20px #fff',
         disableKeyboardControls: false,
         disablePanzoom: false,
         disableWheelControls: false,
         hideControlsAfter: false,
         lightboxTransitionSpeed: 0.3,
         lightboxTransitionTimingFunction: 'linear',
         // overlayColor: 'rgba(185, 7, 230, 0.5)',
         slideAnimationType: 'slide',
         slideSpringValues: [300, 50],
         slideTransitionSpeed: 0.6,
         slideTransitionTimingFunction: 'linear',
         usingPreact: false
       },
       buttons: {
         backgroundColor: 'rgba(30,30,36,0.8)',
         iconColor: 'rgba(255, 255, 255, 0.8)',
         iconPadding: '10px',
         showAutoplayButton: false,
         showCloseButton: true,
         showDownloadButton: false,
         showFullscreenButton: false,
         showNextButton: true,
         showPrevButton: true,
         showThumbnailsButton: false,
         size: '40px'
       },
       caption: {
     captionAlignment: 'start',
     captionColor: '#FFFFFF',
     captionContainerPadding: '20px 12% 30px 12%',
     captionFontFamily: 'inherit',
     captionFontSize: 'inherit',
     captionFontStyle: 'inherit',
     captionFontWeight: 'inherit',
     captionTextTransform: 'inherit',
     showCaption: true
       },
       thumbnails: {
         showThumbnails: false,
         thumbnailsAlignment: 'center',
         thumbnailsContainerBackgroundColor: 'transparent',
         thumbnailsContainerPadding: '0',
         thumbnailsGap: '0 1px',
         thumbnailsIconColor: '#ffffff',
         thumbnailsOpacity: 0.4,
         thumbnailsPosition: 'bottom',
         thumbnailsSize: ['100px', '80px']
       },
       progressBar: {
         backgroundColor: '#f2f2f2',
         fillColor: '#000000',
         height: '3px',
         showProgressBar: true
       },
     };


// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "limited-edition-nft-kits" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `
// export default function nftPage({ data }) {
  export default function aboutPage() {
  return (




<CustomBox>
    
    <Layout className="thanks-page">
    <Helmet>
  <body className="about" />
</Helmet>
    <Seo
          title={`About Todd Lambert`}
          description={`Todds story - about Todd Lambert`}
          image={'https://toddlambert.com/promo-about-todd.jpg'}
        />



<div className="vidbox" style={{position:'relative', maxHeight:'80vh'}}>








<div className="video-background">
    <div className="video-foreground">
      
      <iframe title="iFrame" className="" width="100%" height="350" src="https://www.youtube.com/embed/X7H_0AqV2ew?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=X7H_0AqV2ew" frameBorder="0" allowFullScreen></iframe>
    </div>
</div>




</div>


<br />


<SRLWrapper options={options} className="poppit">



      
      
 <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative', backgroundColor:'#222', width:'92%', margin:'0 auto', padding:'1rem', borderBottom:'4px solid #000', borderTop:'1px solid #000', boxShadow:'0px 0px 20px 0px #000', borderRadius:'20px', overflow:'',}}>

<div className="" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', color:'#fff'}}>
<h2>Meet Todd</h2>
<p style={{position:'relative',}}>My name is Todd Lambert, and this is my story. It all began when the country was a different place, my parents were wanting to have a family, and I was born.

<div className="txtshadow-header" style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(8deg)', textAlign:'center', fontSize:'450%', zIndex:'1',}}><div className="txtshadow-3d" style={{color:'#ff0000', transform:'rotate(-10deg)', fontWeight:'bold', textShadow:' 1px 8px 2px black',}}>NOPE!</div></div>
<div style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(-8deg)', textAlign:'center',}}> &nbsp;</div>

</p>

</div>





<div style={{margin:'1rem auto 0 auto', color:'#fff', width:'90%', textAlign:'center',}}>
<h3>OK, who wants to read that crap?</h3> How about some photos instead?
</div>

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>

       <StaticImage alt="Todd Lambert on location" src="../../static/assets/todd.jpg" />
<div style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}><span className="txtshadow" style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>
Todd Lambert on location</span></div>
</div>


 </div>

 

  


 
 
 
 
 
 
 

 
 

 
 
 
 <div className="split2" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>



<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(10deg)', zIndex:'' }}><StaticImage alt="Todd Lambert - rockin' the bowl-cut!" src="../../static/assets/todd-young1.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Rockin the bowl cut!</div>
</div>


<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(-10deg)', zIndex:''}}><StaticImage alt="Todd Lambert - Future was so bright, needed shades" src="../../static/assets/todd-young2.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Future was so bright, needed shades</div>
</div>


 </div>
 
 

 
 
 
  
<div className="masonry">


<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>  
       <StaticImage alt="Hanging with friends" src="../../static/assets/todd-friends.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Hanging with friends</span>
</div>

</div>



       
       
<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>  
      <StaticImage alt="Young Todd, Clean Cut!" src="../../static/assets/todd-young-business.jpg" />

      <div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Clean Cut! (a rare shot!)</span>
</div>

</div>
 
 
 


<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>
       <StaticImage alt="Life Reachs Out And Grabs Ya!" src="../../static/assets/todd-grabs.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Life reachs out and grabs ya</span>
</div>

</div>




<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>
       <StaticImage alt="Selfie while shooting in Mono Lake" src="../../static/assets/todd-horizons.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Selfie while shooting in Mono Lake</span>
</div>

</div>



<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>
       <StaticImage alt="Oops! @#$!" src="../../static/assets/bluebox-crash.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Oops! @#$!</span>
</div>

</div>

 
<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>
       <StaticImage alt="Hi, I'm Todd" src="../../static/assets/todd-profile.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Hi, I'm Todd</span>
</div>

</div>




<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>
       <StaticImage alt="Todd standing at Mushroom Rock, Kansas" src="../../static/assets/todd2.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>Todd standing at Mushroom Rock, Kansas</span>
</div>

</div>
 


<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>
       <StaticImage alt="On the road, always a new target to shoot!" src="../../static/assets/IMG_0643.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>On the road, always a new target to shoot!</span>
</div>

</div>


<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}>
       <StaticImage alt="The man behind the camers - it's me!" src="../../static/assets/IMG_1894.jpg" />

<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>
<span style={{background:'#000', opacity:'.8', padding:'3px 5px',}}>The man behind the camera - it's me!</span>
</div>

</div>

 
 <br /><br />
 






 </div>

</SRLWrapper>
 
       
       
       

{/* <ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation> */}
       
   


    {/* <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
    </div> */}



    </Layout>
     </CustomBox>
    

  )
}