/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { Footer } from "../components/footer"
import ScrollAnimation from 'react-animate-on-scroll'
import { IoShareOutline } from 'react-icons/io5'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay, ImDisplay, ImMobile2 } from "react-icons/im"

// import Popup from '../components/Popup'
// import GoogleMap from '../components/GoogleMap'
// import ContactInc from '../components/newssign'
// import Newsignup from "../components/newssign"
// import Section1 from "../pages/test2"

import styled from "styled-components"
import { Social } from "../components/social"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"




const CustomBox = styled.div`

.container21 section{
  border:0px solid blue;
}

`



export const pageQuery = graphql`
query HomeQuery($id: String!) {
  site {
    siteMetadata {
      title
      titleDefault
      siteUrl
      description
      image
      twitterUsername
      companyname
      showfooter
      showInfo
      showCover
      showFeature
      showPosts
      showResume
      showSocial
      showSkills
      showNav
      showPopup
      siteColor
      showDates
    }
  }
  markdownRemark(id: {eq: $id}) {
    id
    html
    excerpt(pruneLength: 148)
    frontmatter {
      date(formatString: "YYYY-MM-DD-HH-MM-SS")
      slug
      title
      description
      youtuber
      youtuber2
      youtubestart
      youtubeend
      audiostart
      audiotitle
      audioend
      youtubemute
      youtubecontrols
      youtubeautostart
      profTitle
      profText
      addressText
      addressText2
      skillsTitle
      skillsText
      svgzindex
      tagline
      featuredImage {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      secondaryImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      underlayImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      cta {
        ctaText
        ctaLink
      }
      coverletter {
        coverText
        coverLink
      }
      portfolio {
        openText
        closeText
      }
      svgImage {
        relativePath
      }
    }
  }
  posts: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {template: {eq: "blog-post"}}}
    limit: 9
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "YYYY-MM-DD-HH-MM-SS")
          slug
          title
          nftlink
          isnftforsale
          featuredImage {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`




const HomePage = ({ data }) => {
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


    const { companyname } = useSiteMetadata()
    const { siteUrl } = useSiteMetadata()
		

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart
    const SkillsText = frontmatter.skillsText
    const coverText = frontmatter.coverletter.coverText
    const { showNav } = useSiteMetadata()
    const { showInfo } = useSiteMetadata()
    const { showFeature } = useSiteMetadata()
    const { showPosts } = useSiteMetadata()
    const { showResume } = useSiteMetadata()
    const { showSocial } = useSiteMetadata()
    const { showSkills } = useSiteMetadata()
    const { showCover } = useSiteMetadata()
    const { showfooter } = useSiteMetadata()




    const CtaLink = frontmatter.cta.ctaLink

    
    
    const ProfText = frontmatter.profText
 

    const openQuote = frontmatter.portfolio.openText
    const closeQuote = frontmatter.portfolio.closeText
    

    const resizeMobile = () => {
      const elements = document.querySelectorAll('.boom');
      elements.forEach(el => el.style.width = '400px');
    }

  const resizeDesk = () => {
    const elements = document.querySelectorAll('.boom');
    elements.forEach(el => el.style.width = '80%');
  }


  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
  return (
    <object title="VidSocks Rock" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="VidSocks Rock" ></object>
  )
}





const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

function Iframer() {
    

    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <ReactPlayer
      className='react-player66'
      url={Url}
      width="100%"
      height="100%"
  style={{zIndex:'1'}}
      config={{
        youtube: {
          playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:true  }
        },
      }}
      playing
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'1', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column',  paddingTop:'100px'}}>



    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', height:'90vh', margin:'5vh auto', border:'0px solid red', display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', flexDirection:'column'}}>
    



<div style={{display:'flex', justifyContent:'center', height:'', margin:'0 auto 0 auto', width:'100%', border:'0px solid yellow'}}>
<div style={{ fontWeight:'bold', padding:'0 1rem', margin:'0 auto', fontSize:'clamp(1.2rem, 2.8vw, 3.4rem)',  borderRadius:'12px', border:'0px solid #333', filter:'drop-shadow(2px 2px 2px #000)', opacity:'.7' }}><ImPlay style={{margin:'0 auto', width:'100px', fontSize:'60px'}} />Play</div>
                
            </div>


      </div>
      </button>}
        light="../assets/transparent.png"
    />
    )
  }

  


  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend
  const AudioTitle = frontmatter.audiotitle

  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (
<div style={{marginTop:'10px', position:'relative', zIndex:'1',
display:'flex', justifyContent:'center', maxHeight:'80px !important', height:'150px', border:'0px solid yellow', width:'100%'
}}>
<ReactPlayer
          className='react-player67'
          url={iframeUrl3}
          width="250px"
          height="100%"
          style={{
            border:'0px solid red'
        }}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'absolute', top:'-40px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
    

          <div className="popped" style={{display:'flex', width:'80%', minWidth:'300px', margin:'0 auto', fontWeight:'bold', padding:'.2rem .4rem', fontSize:'2rem', background:'rgba(0,0,0,0.30)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            
            <div style={{fontSize:'.8rem', fontWeight:'', width:'100%', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            I just listened to:<br />



            <div style={{fontSize:'1rem', fontWeight:'bold', marginTop:'5px' }}>{ AudioTitle }</div>
      
            <div style={{display:'flex', justifyContent:'center', marginTop:'5px'}}>
            <div><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000),', color:'#06f21a'}} /></div> &nbsp; <div>Click to listen </div>
            
            </div>
            </div>

          </div>
         
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     </div>




    )
  }


  
  return (

    // TOP OF HOME
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" />
</Helmet>
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
   image={ siteUrl + getSrc(frontmatter.featuredImage) }
      />


<div id="top" className="container22" style={{
 	overflowY: 'scroll',
   overflowX: 'hidden',
  width:'100vw'
}}>




{/* show feature */}
  {showFeature ? (   

<section id="feature" order="1" name="feature" className="print" style={{ display:'', margin:'0', padding:'0', position:'relative'}}>


  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'100vh', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>



{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />





          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}








 



{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}

         

        


      </div>
  </article>

</section>


) : (
  ""
)}
{/* end show feature */}







{showNav ? (
  <div className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
      ) : (
        ""
      )}






{/* show Info */}

{showInfo ? (



<section className="vertical" id="info" order="2" name="info" style={{ display:'', height:'100%',  minHeight:'100vh', position:'relative', zIndex:'0', overflow:'visible', margin:'0', padding:'0 0 10vh 0', border:'0px solid blue'}}>
  <article style={{ margin:'0 0 0 0'}}>

  <div className="" style={{maxHeight:'100vh', width:'100vw', height:'', overflow:'visible',position:'absolute', top:'', zIndex:'-1',}}>
{UnderlayImage ? (
            <GatsbyImage
            image={UnderlayImage}
            alt={frontmatter.title + " - image"}
            className="mcboaty print"
            placeholder="blurred" loading="eager"
              style={{height:'auto', width:'100vw', maxHeight:'125vh',  objectFit:'cover', overflow:'visible', border:'0px solid red !important'}}
          />
       
          
          ) : (
            ""
          )}
       
</div>



             
<div id="profiletop" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:"center", margin:'0 0',
  padding:'0 4% 0 4%', borderRadius:'0 0 10px 10px',}}>





{UnderlayImage ? (
  // custom image in effect //

  <div className="flexcheek mob print nameblock" style={{marginTop:'', padding:'1rem 2rem 0 2rem', maxHeight:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)', textShadow:'0 2px 3px #000', color:'#fff', 
  background:'rgba(0,0,0,0.50)', 
  backdropFilter:'blur(12px)',
  borderRadius:'10px'}}>
  {/* <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft" initiallyVisible={true} animateOnce={false} animatePreScroll={false} style={{}}>  */}
  <h1 className="title1" style={{fontSize:'clamp(2.5rem, 3.5vw, 3.2rem)'}}>{frontmatter.profTitle}</h1>
            {/* <h2 className="tagline1">
              {frontmatter.tagline}
            </h2> */}
            <div
            style={{paddingBottom:'2rem'}}
              className="description"
              dangerouslySetInnerHTML={{ __html: ProfText }}
            />
            {/* </ScrollAnimation> */}
            </div>
       
  
            ) : (
          
            <div className="flexcheek mob print" style={{padding:'0', maxHeight:'', fontSize:'clamp(1rem, 1.5vw, 3.2rem)',}}>
  
              <h1 className="title1" style={{fontSize:'clamp(2rem, 4.5vw, 3.2rem)'}}>{frontmatter.profTitle}</h1>
            {/* <h2 className="tagline1">
              {frontmatter.tagline}
            </h2> */}
  
            <div
            style={{}}
              className="description"
              dangerouslySetInnerHTML={{ __html: ProfText }}
            />
            </div>


            
  
            )}
        


      <div className="flexcheek mob2 print" style={{position:'', maxHeight:'', overflow:'', marginBottom:'', paddingTop:'2vh', borderRadius:'0 0 10px 10px',
      }}>





           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="drop-shadow avatar-frame"
              style={{ maxWidth:'', height:'25vh', maxHeight:'25vh', position:'relative',  top:'', objectFit:'contain', backgroundSize:'contain', marginBottom:'10px'}}
            />
          ) : (
            ""
          )}




{UnderlayImage ? (

  <div className="nameblock" style={{margin:'20px auto 0 auto', padding:'0 0 10px 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  maxWidth:'80%', paddingTop:'', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  }} >
{/* <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutRight" initiallyVisible={true} animateOnce={false} animatePreScroll={false} style={{marginTop:'10px'}}>  */}
<span style={{marginTop:'10px', fontSize:'160%'}}>{companyname}</span>
<br />
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
<br />
<Link state={{modal: true}} to="/contact" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center' }}>Contact Me</Link>

<br />
{showCover ? (
  <Link state={{modal: true}} to="/about-todd/" className="print" style={{color:'', fontSize:'', margin:'5px auto 0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>{coverText}</Link>
) : (
  ""
)}

{showSocial ? (
           <Social />
          ) : (
            ""
          )}



{ !YouTube2 ? (
            ""
       
          ) : (
            
            <Iframer3 />
            
          )}
          <br />
          {/* </ScrollAnimation> */}
</div>


 // end nameblock



) : (


  
  <div className="nameblock" style={{margin:'0 auto 0 auto', alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center', border:'0px solid red', maxWidth:'80%', paddingTop:'1rem', fontSize:'clamp(1rem, 1.4vw, 3.2rem)'}} >
<span style={{color:'', fontSize:'160%'}}>{companyname}</span>
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
<br />
{CtaLink ? (
           <a
   href={frontmatter.cta.ctaLink}
   className="button print"
   target="_blank"
   rel="noreferrer"
    style={{
    cursor:'pointer',
    textDecoration:'underline',
    width:'',
    maxWidth:'',
    margin:'0 auto',
    display:'flex',
    alignSelf:'center',
    color:''
    }}>{frontmatter.cta.ctaText}
</a>
          ) : (
            <Link state={{modal: true}} to="/contact" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center'}}>{frontmatter.cta.ctaText}</Link>
          )}


{showSocial ? (
           <Social />
       
          ) : (
            ""
          )}



{showCover? (

<Link state={{modal: true}} to="/about-todd" className="print" style={{color:'', fontSize:'', margin:'5px auto 0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>{frontmatter.coverletter.coverText}</Link>

) : (
  
""

)}


{ !YouTube2 ? (
            ""
       
          ) : (
            
            <Iframer3 />
            
          )}
<br />
</div> // end nameblock

      // custom image in effect //
)}





</div>
</div> 
</article>
</section>
) : (
  ""
)}
{/* end show Info */}









     
     
{/* <Popup>
 <Section1 />
</Popup>
<br /> */}










{/* end show Posts */}
{showPosts ? (
<section className="vertical" id="posts" order="3" name="posts" style={{ margin:'0 0 0 0', background:'inherit', height:'100%', minHeight:'100%', overflow:'', border:'0px solid yellow', display:'flex', verticalAlign:''}}>


<div className="horizontal-holder allin60panel" style={{position:'relative', maxHeight:'', margin:' 0', border:'0px solid red'}}>



<ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft" initiallyVisible={false} animateOnce={false} animatePreScroll={false} style={{position:'absolute', left:'0', top:'20vh', zIndex:'1', width:'', background:'rgba(0, 0, 0, .6)', color:'#ccc', height:'', borderRadius:'0 12px 12px 0', borderLeft:'none !important',}}> 
<div id="resizer" style={{display:'flex', flexDirection:'column', gap:'30px', justifyContent:'center', 
  alignItems:'center', alignContent:'center', textAlign:'center',  padding:'1rem', textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold',}}><button onClick={resizeMobile}><ImMobile2 style={{fontSize:'24px', margin:'0 auto'}} />Mobile </button><button onClick={resizeDesk}><ImDisplay style={{fontSize:'24px', margin:'0 auto'}} />Desktop</button>



</div>
</ScrollAnimation>

 <div className="horizontal-scroll panels sitegrad movingBG" style={{ scrollSnapType: '', maxHeight:'',}}>
 <div className="" style={{height:'50%', paddingTop:'70%'}}></div>


 <div className="introspacer" style={{border:'0px solid', width:''}}></div>


{openQuote ? (
            
            <div style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', width:'100vw', height:'50vh', color:''}}>
<div className="" style={{width:'60vw', paddingTop:'20vh', borderRadius: '12px', fontSize:'clamp(2rem, 2.8vw, 2.8rem)'}}>
Please check out my portfolio
&#x276F;&#10095;
</div>

          {/* <Link className="button" to="/posts/2" style={{textDecoration:'none', color:'inherit', textAlign:'center', height:'', display:'', placeContent:'', border:'0px solid red',}}>View More </Link> */}
          {/* <Popup>
          <ContactInc />
        </Popup> */}
        </div>

          ) : (
            ""
          )}





        <BlogListHome data={posts} />

        {/* <div style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'50vh', color:'#ccc'}}>

          <Link className="button" to="/posts/2" style={{textDecoration:'none', color:'inherit', textAlign:'center', height:'', display:'', placeContent:'', border:'0px solid red',}}>View More </Link>
        </div> */}

{closeQuote ? (

        <div style={{display:'grid', placeContent:'center', paddingTop:'10vh'}}><blockquote style={{fontFamily:'', minWidth:'300px', textAlign:'left', borderRadius: '12px', fontSize:'clamp(1rem, 1.8vw, 2.8rem)', }}><div style={{padding:'0 10% 0px', color:''}}>{closeQuote}</div>
        </blockquote></div>

        ) : (
            ""
          )}


   </div>

  </div>
</section>
   ) : (
    ""
  )}
{/* end show Posts */}

{/*  show Resume */}
{showResume ? (
<section className="vertical" id="resume" order="4" style={{ display:'', minHeight:'', overflow:'', margin:'5vh 0 0 0', position:'relative', border:'0px solid blue'}}>


<div className="toolbar noapp print" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'start', background:'rgba(24, 29, 31, 0.2)', borderRadius:'12px', padding:'5px 0 5px 0', }}>
<div className="keyboard" order="" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0', lineHeight:'calc(2em + .4vw)'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> &nbsp;OR&nbsp; <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
  <div className="keyboard" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto', lineHeight:'calc(2em + .4vw)',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'38px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>
<br />
<article className="hasapp"  style={{ display:'', height:'', overflow:'', padding:'1.6rem', margin:'0', position:'relative', fontSize:'clamp(1rem, 1.4vw, 3.2rem)'}}>

<div id="resumename" style={{display:'none', position:'relative', top:'', fontSize:'160%', padding:'0 0 2rem 0', textAlign:'left', width:'100%',}}>{companyname}<br />
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
</div>

<div id="" className="">
{/* <ScrollAnimation animateIn="rotateIn" animateOut="rotateOut" initiallyVisible={true} animateOnce={false} animatePreScroll={false} style={{}}>  */}
<span
          style={{  columnCount:'2',
            columnGap:'40px',
            columnWidth:'100%'}}
            className=""
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/* </ScrollAnimation> */}
</div>

<br />
<div className="toolbar noapp print" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'start', background:'rgba(24, 29, 31, 0.2)', borderRadius:'12px', padding:'5px 0 5px 0', }}>
<div className="keyboard" order="" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0', lineHeight:'calc(2em + .4vw)'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> &nbsp;OR&nbsp; <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
  <div className="keyboard" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto', lineHeight:'calc(2em + .4vw)',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'38px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>

</article>





</section>
) : (
  ""
)}
{/* end show Resume */}

{/*  show Skills */}
{showSkills ? (

<section className="print vertical" id="skills" order="5" style={{ width:'100%', overflow:'hidden', position:'relative',  justifyContent:'center', alignContent:'center', margin:'0 auto', textAlign:'center', borderRadius:'8px', minHeight:'', maxWidth:'', padding:'1rem', display:'', placeContent:'', border:'0px solid green', }}>
<br />
{/* <ScrollAnimation animateIn="bounceInUp" animateOut="BounceOutDown" initiallyVisible={true} animateOnce={false} animatePreScroll={false} style={{}}>  */}
<div className="flexbutt" style={{display:'flex', justifyContent:'center', width:'', padding:'0 2%', columnGap:'50px', border:'0px solid blue' }} dangerouslySetInnerHTML={{ __html: SkillsText }}>
</div>
{/* </ScrollAnimation> */}
  </section>

          ) : (
            ""
          )}
{/* end show Skills */}





 </div>{/* end scooch */}




 {/* <GoogleMap /> */}


<div id="bottom" className="usability" style={{position:'relative', zIndex:'', bottom:'0', display:'flex', placeSelf:'center', placeContent:'center', width:'100%', margin:'0 auto', alignContent:'center', alignItems:'center', justifyContent:'center', border:'0px solid blue', textAlign:'center'}}>
{/* <div id="branding" style={{position:'relative', left:'0', bottom:'5px', fontSize:'90%'}}><a href="https://myresume.site" target="_blank" rel="noreferrer">MyResume®</a></div> */}
</div>


{/* show footer */}
{showfooter ? (
<Footer className="vertical" />
) : (
  ""
)}
{/* end show footer */}

    </Layout>
    </CustomBox>
  )
}

export default HomePage