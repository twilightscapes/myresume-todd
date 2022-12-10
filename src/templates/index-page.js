/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
// import { RiArrowRightSLine } from "react-icons/ri"
import { Footer } from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
// import ScrollAnimation from 'react-animate-on-scroll'
// import { FaRegPlusSquare } from 'react-icons/fa'
import { IoShareOutline } from 'react-icons/io5'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"

import styled from "styled-components"
import { Social } from "../components/social"
// import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"


const CustomBox = styled.div`

`



export const pageQuery = graphql`
  query HomeQuery($id: String! ) {
    
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
        siteColor
      }

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        showResume
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
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
        officialname {
          nameText
          nameLink
        }
        address {
          addressText
        }
        address2 {
          addressText2
        }
        resume {
          highlightsTitle
          highlightsText
          profTitle
          profText
          eduTitle
          eduText
          exTitle
          exText
        }
        portfolio{
          openText
          closeText
          showSocial

        }
        svgImage{
          relativePath
        }
      }
    }


 
    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
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
            nftdrop
            nftdrop
  
            
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

    // const { iconimage } = useSiteMetadata()


    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts
    const ShowResume = frontmatter.showResume
    const showfooter = useSiteMetadata()

    // const showCTA = frontmatter.cta.ctaText
    const CtaLink = frontmatter.cta.ctaLink

    const openQuote = frontmatter.portfolio.openText
    const closeQuote = frontmatter.portfolio.closeText
    const showSocial = frontmatter.portfolio.showSocial

    // const { siteColor } = useSiteMetadata()

    // const SiteColor = sitecolor

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
  style={{zIndex:'3'}}
      config={{
        youtube: {
          playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
        },
      }}
      loop
   
      playsinline
      />
    )
  }

  


  
  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" style={{ }} />
</Helmet>
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
   image={ siteUrl + getSrc(frontmatter.featuredImage) }
      />

      




      

        



<div name="container21" className="container21" style={{height:'',}}>
{/* { sitecolor } */}
{/* show feature */}
        {ShowFeature ? (
          
<section id="feature" name="feature" style={{ display:'',}}>
  <article>


  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>

    

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





 {/* show Info */}
 {ShowInfo ? (

<section id="info" name="info" style={{ display:'', height:'', position:'', zIndex:'2', overflow:'',}}>
  <article>

  <div id="" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'', alignItems:"center", padding:'0 4%'}}>


  {UnderlayImage ? (
            <GatsbyImage
            image={UnderlayImage}
            alt={frontmatter.title + " - image"}
            className="mcboaty"
            style={{width:'100vw', height:'90vh', overflow:'hidden', maxHeight:'', position:'absolute', left:'0', top:'', zIndex:'-1', objectFit:'cover', opacity:'.8', border:'0px solid red !important'}}
          />
       
          ) : (
            ""
          )}



          
{/* 
<div class="" style="position:relative; z-index:0; min-width:; height:100%; padding:4vh 1rem 1rem 3rem; font-size:clamp(.7rem, 3vw, 3.2rem); left:0;, top:4vh; line-height:100%; text-shadow:0 2px 7px #000; background:rgba(0,0,0,0.50); border-radius:12px; border:0px solid yellow;">
  <p>You will receive an identity disk.</p>
  <p>Everything you do or learn</p>
  <p>will be imprinted on this disk.</p>
  <br>
  <p>If you lose your disk or fail to</p>
  <p>follow commands, you will be</p>
  <p>subject to immediate de-resolution.</p>
  <br>
  <p>Mirroring complete. Disk Activated.</p>
  <br>
  <p class="TRON txtshadow tronText actionJackson" style="cursor:pointer; margin:0 auto; padding: 0; text-decoration:none; text-shadow:3px 3px 6px rgb(0, 162, 184); font-size:80%;"><a href="/lightdisc-grid/" style="position:relative;">Proceed to games.</a></p>
</div> */}

      


{UnderlayImage ? (
  

  <div className="flexcheek mob print" style={{padding:'3rem 2rem 0 2rem', maxHeight:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)', textShadow:'0 2px 7px #000', background:'rgba(0,0,0,0.70)', color:'#fff', borderRadius:'10px'}}>
  
  <h1 className="title1">{frontmatter.title}</h1>
            <h2 className="tagline1">
              {frontmatter.tagline}
            </h2>
            <div
            style={{}}
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            </div>
  
            ) : (
          
            <div className="flexcheek mob print" style={{padding:'3rem 2rem 0 2rem', maxHeight:'', fontSize:'clamp(1rem, 1.5vw, 3.2rem)',}}>
  
              <h1 className="title1">{frontmatter.title}</h1>
            <h2 className="tagline1">
              {frontmatter.tagline}
            </h2>
  
            <div
            style={{}}
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
           
            </div>


            
  
            )}
        


      <div className="flexcheek mob2 print" style={{position:'', maxHeight:'', overflow:'', marginBottom:'', paddingTop:'5vh', }}>


           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="drop-shadow avatar-frame"
              style={{ maxWidth:'', height:'', maxHeight:'40vh', position:'relative',  top:'', objectFit:'contain', backgroundSize:'contain', zIndex:''}}
            />
          ) : (
            ""
          )}



{UnderlayImage ? (

  <div className="nameblock" style={{margin:'20px auto 0 auto', padding:'0 0 10px 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center', color:'#fff', border:'0px solid red', maxWidth:'80%', paddingTop:'1rem', background:'rgba(0,0,0,0.50)', borderRadius:'10px', textShadow:'0 2px 7px #000', fontSize:'clamp(1rem, 1.4vw, 3.2rem)'}} >
<span style={{color:'', fontSize:'160%'}}>{frontmatter.officialname.nameText}</span>
{frontmatter.address.addressText}
<br />
{frontmatter.address2.addressText2}
<br /><br />
<Link state={{modal: true}} to="/contact/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', maxWidth:'600px', paddingLeft:'3rem', paddingRight:'3rem' }}>Contact Me</Link>

{showSocial ? (
           <Social />
       
          ) : (
            ""
          )}

<br />
<Link state={{modal: true}} to="/cover/" className="print" style={{color:'', fontSize:'', margin:'0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>View cover letter</Link>
<br />


</div>

) : (
  
  <div className="nameblock" style={{margin:'0 auto 0 auto', alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center', border:'0px solid red', maxWidth:'80%', paddingTop:'1rem', fontSize:'clamp(1rem, 1.4vw, 3.2rem)'}} >
<span style={{color:'', fontSize:'160%'}}>{frontmatter.officialname.nameText}</span>
{frontmatter.address.addressText}
<br />
{frontmatter.address2.addressText2}
<br /><br />
{/* <Link state={{modal: true}} to="/contact/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'600px'}}>Contact Me</Link> */}


{CtaLink ? (
           
           <Link
   to={frontmatter.cta.ctaLink}
   className="button print"
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
</Link>
       
          ) : (
            <Link state={{modal: true}} to="/contact/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'600px'}}>{frontmatter.cta.ctaText}</Link>
          )}

{showSocial ? (
           <Social />
       
          ) : (
            ""
          )}

<br />
<Link state={{modal: true}} to="/cover/" className="print" style={{color:'', fontSize:'', margin:'0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>View cover letter</Link>
<br />





</div>

    
)}




</div>

</div> 


      



</article>
</section>







) : (
  ""
)}
{/* end show Info */}



{/* end show Posts */}
{ShowPosts ? (

<div id="posts" name="posts">
{/* <p style={{fontSize:'150%', textAlign:'center', margin:'0 0 0 0'}}>See it in action:</p> */}

<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'600px', overflow:'hidden', position:'relative',}}>

<div className="RArrow"><span></span></div>



<div className="horizontal-scroll-wrapper squares" style={{margin:'0 auto 0 auto', width:'calc(60vw + 1px)', transform: 'rotate(-90deg) translateY(-60vw)', padding:'20px'}}>



<div className="introspacer" style={{}}></div>

{openQuote ? (
            
            <div style={{display:'grid', placeContent:'center'}}><blockquote style={{fontFamily:'', minWidth:'300px', textAlign:'left', borderRadius: '12px', fontSize:'clamp(1rem, 1.8vw, 2.8rem)', }}><div style={{padding:'2rem 10% 0px', }}>{openQuote}</div>
        {/* <div className="logofirst" style={{textAlign:'right', margin:'2rem 30% 0px 0px'}}>- Todd Lambert</div> */}
        </blockquote></div>

          ) : (
            ""
          )}



        <BlogListHome data={posts} />

{closeQuote ? (

        <div style={{display:'grid', placeContent:'center'}}><blockquote style={{fontFamily:'', minWidth:'300px', textAlign:'left', borderRadius: '12px', fontSize:'clamp(1rem, 1.8vw, 2.8rem)',}}><div style={{padding:'2rem 10% 0px',}}>{closeQuote}</div>
        {/* <div className="logofirst" style={{textAlign:'right', margin:'2rem 30% 0px 0px'}}>- Todd Lambert</div> */}
        </blockquote></div>

        ) : (
            ""
          )}

   </div>

  </div>
</div>

   ) : (
    ""
  )}
{/* end show Posts */}









{/* <StaticImage src="../../static/assets/yourphoto.jpg" alt="your alt text" style={{height:'auto', width:'100vw', maxHeight:'100%', position:'', left:'0', top:'', zIndex:'', margin:'2vh 0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}  /> */}










{/* end show Resume */}
{ShowResume ? (


<section id="resume" name="resume" style={{ display:'', height:'', overflow:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)'}}>

<article>
  

  <div id="" className="flexbutt" style={{display:'flex', gap:'40px', justifyContent:'flex-start', alignItems:'baseline', padding:'0 4%'}}>



        
<div id="" className="flexcheek leftside" style={{ position:'', top:'', order:'', }} >
 
<h3 className="title1" style={{textAlign:'left', margin:'0 0 0 0', fontWeight:'bold', clear:'right', paddingTop:'0',}}>{frontmatter.resume.highlightsTitle}</h3>
<div
          style={{}}
            className=""
            dangerouslySetInnerHTML={{ __html: frontmatter.resume.highlightsText }}
          />





<h3 className="title1" style={{textAlign:'left', margin:'0 0 0 0', fontWeight:'bold', clear:'right', paddingTop:'0',}}>{frontmatter.resume.profTitle}</h3>
<div
          style={{}}
            className=""
            dangerouslySetInnerHTML={{ __html: frontmatter.resume.profText }}
          />





<h3 className="title1" style={{textAlign:'left', margin:'0 0 0 0', fontWeight:'bold', clear:'right', paddingTop:'0',}}>{frontmatter.resume.eduTitle}</h3>
<div
            className=""
            dangerouslySetInnerHTML={{ __html: frontmatter.resume.eduText }}
          />
 

 </div> 






      <div id="" className="flexcheek rightside" style={{order:''}}>
 
 

      


 
      <h3 className="title1" style={{textAlign:'left', margin:'0 0 0 0', fontWeight:'bold', clear:'right', paddingTop:'0',}}>{frontmatter.resume.exTitle}</h3>

      <div
          style={{}}
            className=""
            dangerouslySetInnerHTML={{ __html: frontmatter.resume.exText }}
          />

      
      

      







      </div> 
      
</div>

</article>




{/* <div style={{fontSize:'90%', textAlign:'center', display:'grid', flexDirection:'row', verticalAlign:'middle', justifyContent:'center', lineHeight:'200%', margin:'0 auto', padding:' .5rem 1rem', backdropFilter:'blur(14px)',}}>
    
    <div style={{textAlign:'', display:'flex', alignContent:'', marginBottom:'1rem', width:''}}>
   <IoShareOutline style={{fontSize:'',}} />
  
  </div>
  
   <div style={{textAlign:'', display:'flex', alignContent:'', width:''}}>
   <FaRegPlusSquare style={{fontSize:'',}} /> 
  'Add to Home Screen'
   </div>
   
   </div> */}



</section>
) : (
  ""
)}
{/* end show Resume */}





 </div>{/* end scooch */}



  


  
  


 <div className="" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px dotted #666', justifyContent:'', background:'rgba(0, 0, 0, 0.2)', borderRadius:'', padding:'1rem 0', }}>


<div style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> OR <kbd>Ctrl</kbd> + <kbd>p</kbd></div>


  <div style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'30px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>

</div>
      {/* show footer */}
{showfooter ? (


<Footer />


) : (
  ""
)}
{/* end show footer */}



    </Layout>
    </CustomBox>
  )
}

export default HomePage