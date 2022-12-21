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

import Theme from "../components/theme"

import { IoShareOutline } from 'react-icons/io5'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"

import styled from "styled-components"
import { Social } from "../components/social"
// import Skills from "../templates/skills-page"
// import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
// import Highlights from "../templates/highlights-page"


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
        showSocial
        showSkills
        showCover
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        profTitle
        profText
        addressText
        addressText2
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
        portfolio{
          openText
          closeText
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

    const { companyname } = useSiteMetadata()
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
    const showSocial = frontmatter.showSocial
    const showSkills = frontmatter.showSkills
    const ShowCover = frontmatter.showCover
    const showfooter = useSiteMetadata()
    // const showCTA = frontmatter.cta.ctaText
    const CtaLink = frontmatter.cta.ctaLink
    // const coverLink = frontmatter.coverletter.coverLink
    
    
    const ProfText = frontmatter.profText
 

    const openQuote = frontmatter.portfolio.openText
    const closeQuote = frontmatter.portfolio.closeText
    

    
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
          playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
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
  <body className="homepage" />
  {/* <link rel="stylesheet" href={frontmatter.portfolio.closeText} /> */}
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



<div style={{maxHeight:'100vh', height:'100vh', overflow:'hidden',position:'absolute', top:'', zIndex:'-1',}}>
{UnderlayImage ? (
            <GatsbyImage
            image={UnderlayImage}
            alt={frontmatter.title + " - image"}
            className="mcboaty print noapp"
            placeholder="blurred" loading="eager"
              style={{height:'auto', width:'100vw', maxHeight:'',  objectFit:'cover', overflow:'', border:'0px solid red !important'}}
          />
       
          ) : (
            ""
          )}
</div>



 {/* show Info */}
 {ShowInfo ? (

<section id="info" name="info" style={{ display:'', minHeight:'', height:'', position:'', zIndex:'2', overflow:'', border:'0px solid red'}}>
  <article style={{ margin:'0 0 10vh 0'}}>





{/* {UnderlayImage ? (
""
) : (
  ""
)} */}
             
             <div id="" className="flexbutt" style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:"center", margin:'0 4%',
  padding:'2% 4% 0 4%',
  // textShadow:'0 2px 3px #000',
  //  background:'rgba(0,0,0,0.70)',
  //  color:'#fff', 
   borderRadius:'0 0 10px 10px',}}>





{UnderlayImage ? (
  // custom image in effect //

  <div className="flexcheek mob print nameblock" style={{marginTop:'', padding:'3rem 2rem 0 2rem', maxHeight:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)', textShadow:'0 2px 3px #000', color:'#fff', 
  background:'rgba(0,0,0,0.50)', 
  backdropFilter:'blur(12px)',
  borderRadius:'10px'}}>
  
  <h1 className="title1">{frontmatter.title}</h1>
            <h2 className="tagline1">
              {frontmatter.tagline}
            </h2>
            <div
            style={{paddingBottom:'2rem'}}
              className="description"
              dangerouslySetInnerHTML={{ __html: ProfText }}
            />
            </div>
  
            ) : (
          
            <div className="flexcheek mob print" style={{padding:'0', maxHeight:'', fontSize:'clamp(1rem, 1.5vw, 3.2rem)',}}>
  
              <h1 className="title1">{frontmatter.profTitle}</h1>
            <h2 className="tagline1">
              {frontmatter.tagline}
            </h2>
  
            <div
            style={{}}
              className="description"
              dangerouslySetInnerHTML={{ __html: ProfText }}
            />
            </div>


            
  
            )}
        


      <div className="flexcheek mob2 print" style={{position:'', maxHeight:'', overflow:'', marginBottom:'', paddingTop:'0vh', borderRadius:'0 0 10px 10px',
      // textShadow:'0 2px 7px #000', 
      }}>





           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="drop-shadow avatar-frame"
              style={{ maxWidth:'', height:'', maxHeight:'35vh', position:'relative',  top:'', objectFit:'contain', backgroundSize:'contain', zIndex:''}}
            />
          ) : (
            ""
          )}











{UnderlayImage ? (

  <div className="nameblock" style={{margin:'20px auto 0 auto', padding:'0 0 10px 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  maxWidth:'80%', paddingTop:'1rem', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  }} >

<span style={{color:'', fontSize:'160%'}}>{companyname}</span>
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
<br />
<Link state={{modal: true}} to="/contact/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', maxWidth:'600px', paddingLeft:'3rem', paddingRight:'3rem' }}>Contact Me</Link>

{showSocial ? (
           <Social />
          ) : (
            ""
          )}
<br />
{ShowCover ? (
  <Link state={{modal: true}} to="/cover/" className="print" style={{color:'', fontSize:'', margin:'0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>View cover letter</Link>
) : (
  ""
)}
<br />
</div> // end nameblock



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
            <Link state={{modal: true}} to="/contact/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'600px', padding:'1rem'}}>{frontmatter.cta.ctaText}</Link>
          )}


{showSocial ? (
           <Social />
       
          ) : (
            ""
          )}
<br />

{/* {ShowCover ? (
""
) : (
  ""
)} */}

{ShowCover? (

<Link state={{modal: true}} to="/cover/" className="print" style={{color:'', fontSize:'', margin:'0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>{frontmatter.coverletter.coverText}</Link>

) : (
  
""

)}

</div> // end nameblock

      // custom image in effect //
)}





</div>
</div> 
{/* <div style={{height:'100px', border:'1px solid red'}}>&nbsp;</div> */}
</article>
</section>

) : (
  ""
)}
{/* end show Info */}















{/* end show Posts */}
{ShowPosts ? (

<div id="posts" name="posts" style={{margin:'20vh 0', background:'inherit'}}>


<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'60vh', overflow:'hidden', position:'relative',}}>

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








{showSkills ? (
           <Link state={{modal: true}} to="/skills/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'2rem auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center'}}>View Skills &amp; Capabilities</Link>
       
          ) : (
            ""
          )}





{/* end show Resume */}
{ShowResume ? (

 


<section  style={{ display:'', height:'', overflow:'', margin:'10vh 0 0 0', position:'relative'}}>



<article className="hasapp"  style={{ display:'', height:'', overflow:'', padding:'1.6rem', margin:'0', position:'relative', fontSize:'clamp(1rem, 1.4vw, 3.2rem)'}}>

<div id="resumename" style={{display:'none', position:'absolute', top:'-4rem', fontSize:'160%', padding:'0 0 2rem 4rem', textAlign:'left', width:'100%',}}>{companyname}<br />
{/* {frontmatter.address.addressText}
<br />
{frontmatter.address2.addressText2} */}
</div>

<div id="resume" className="">

<span
          style={{}}
            className=""
            dangerouslySetInnerHTML={{ __html: html }}
          />
          
</div>

  

</article>



 <div className="toolbar noapp print" style={{display:'flex', flexDirection:'', gap:'', width:'', borderTop:'1px solid #777', borderBottom:'1px solid #777', justifyContent:'', background:'rgba(24, 29, 31, 0.2)', borderRadius:'', padding:'5px 0 5px 0', }}>
<div className="keyboard" order="1" style={{display:'flex', justifyContent:'', border:'0px solid red', width:'', margin:'0 auto', padding:'4px 0 0 0',}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Print:</span> &nbsp;<kbd>⌘</kbd> + <kbd>p</kbd> OR <kbd>Ctrl</kbd> + <kbd>p</kbd></div>
{/* <div order="2" className="themer" style={{display:'flex', justifyContent:'center', border:'0px solid red', minWidth:'400px', margin:'0 auto', verticalAlign:'center'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}><Theme  style={{color:'inherit !important',}} /></span></div> */}
  <div order="3" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'auto !important', margin:'0 auto'}}><span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Install:</span> &nbsp;<IoShareOutline style={{fontSize:'30px',}} />&nbsp;+&nbsp; 'Add to Home Screen'</div>
  </div>

</section>


) : (
  ""
)}
{/* end show Resume */}





 </div>{/* end scooch */}



 


  
  



<div id="installedbar" className="toolbar print hasapp" style={{position:'relative', bottom:'', width:'100vw', display:'none', flexDirection:'', gap:'', borderTop:'0px solid #555', justifyContent:'', background:'rgba(24, 29, 31, 0.2)', borderRadius:'', marginTop:'', padding:'2rem 0 3rem 0', zIndex:'', }}>


<div className="" order="1" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
 <Link state={{modal: true}} to="/login/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Admin</Link>
 </div>


 <div className="" order="5" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
 <Link state={{modal: true}} to="/notes/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Notes</Link>
 </div>



 {ShowPosts ? (
  <div order="3" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
<Link state={{modal: true}} to="/posts/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Portfolio</Link>
</div>
) : (
  ""
)}


{/* {ShowResume ? (
  <div order="3" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
<Link state={{modal: true}} to="/resume/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'200px', justifyContent:'center',fontWeight:'bold', }}>Resume</Link>
</div>
) : (
  ""
)} */}

{ShowCover ? (
  <div order="2" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
<Link state={{modal: true}} to="/cover/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Cover Letter</Link>
</div>
) : (
  ""
)}






{showSkills ? (
  <div order="3" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
<Link state={{modal: true}} to="/skills/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Skills</Link>
</div>
) : (
  ""
)}



{/* <div order="7" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
 <Link state={{modal: true}} to="/tips/" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'200px', justifyContent:'center',fontWeight:'bold', }}>Tips</Link>
 </div> */}

</div>



<div className="usability" style={{position:'relative', zIndex:'2', bottom:'0', display:'flex', placeSelf:'center', placeContent:'center', width:'100%', margin:'0 auto', alignContent:'center', alignItems:'center', justifyContent:'center', border:'0px solid blue', textAlign:'center'}}>
<Theme />
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