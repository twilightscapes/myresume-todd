/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { AiOutlineAudioMuted } from "react-icons/ai"
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
import { ImPlay } from "react-icons/im"

import styled from "styled-components"
import { Social } from "../components/social"
// import Skills from "../templates/skills-page"
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
        showInfo
        showCover
        showFeature
        showPosts
        showResume
        showSocial
        showSkills
        showNav
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
      limit: 5
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

    const { iconimage } = useSiteMetadata()

    const { companyname } = useSiteMetadata()
    const { siteUrl } = useSiteMetadata()


    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart
    // const SkillsTitle = frontmatter.skillsTitle
    const SkillsText = frontmatter.skillsText
    
    // const { showNav } = useSiteMetadata()
    const { showInfo } = useSiteMetadata()
    const { showFeature } = useSiteMetadata()
    const { showPosts } = useSiteMetadata()
    const { showResume } = useSiteMetadata()
    const { showSocial } = useSiteMetadata()
    const { showSkills } = useSiteMetadata()
    const { showCover } = useSiteMetadata()
    const { showfooter } = useSiteMetadata()


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
          playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute, loop:true  }
        },
      }}
      playing
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column',  paddingTop:'100px'}}>



    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'5vh auto'}}>
    
    <div style={{position:'relative', maxWidth:'100vw', margin:'0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>



    {iconimage ? (
        
        <img className="homepage-bg" src={iconimage} width="500px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'40vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
                  ) : (
                    ""
                  )}



</div>


<div style={{display:'flex', flexDirection:'', height:'', margin:'0 auto 0 auto', width:'100%', border:'0px solid yellow'}}>
                <div style={{ background:'rgba(0,0,0,0.30)', fontWeight:'bold', padding:'0', margin:'0 auto', fontSize:'clamp(1rem, 2vw, 3.4rem)',  borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)', }}>Play <ImPlay style={{margin:'0 auto', width:'100px', fontSize:'50px'}} /></div>
                
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
<div style={{marginTop:'0px', position:'relative', zIndex:'4',
display:'flex', justifyContent:'center', maxHeight:'80px !important', height:'100px', border:'0px solid yellow', width:'100%'
}}>
<ReactPlayer
          className='react-player67'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
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
          
    

          <div className="popped" style={{display:'flex', minWidth:'200px', margin:'0 auto', fontWeight:'bold', padding:'.2rem .4rem', fontSize:'2rem', background:'rgba(0,0,0,0.30)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)',}}>
            
            <div style={{fontSize:'.8rem', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)', textAlign:'center'}}>
            I'm listening now to:<br />



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

      




      

        
{/* {showNav ? (
  <div style={{height:'60px'}} />
) : (
  ""
)} */}


<div name="container21" className="container21" style={{height:'',}}>
{/* { sitecolor } */}
{/* show feature */}

  {showFeature ? (
          
<section id="feature" order="1" name="feature" className="print no-app" style={{ display:'', margin:''}}>
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




{/* {showFeature ? (
  <div className="no-app" style={{height:'7vh'}} />
) : (
  ""
)} */}











{/* show Info */}
{showInfo ? (

<section id="info" order="3" name="info" style={{ display:'',  minHeight:'100vh', position:'', zIndex:'2', overflow:'', margin:'0', border:'0px solid red'}}>
  <article style={{ margin:'0 0 0 0'}}>

  <div className="no-app" style={{maxHeight:'100vh', height:'100vh', overflow:'hidden',position:'absolute', top:'', zIndex:'-1',}}>
{UnderlayImage ? (
            <GatsbyImage
            image={UnderlayImage}
            alt={frontmatter.title + " - image"}
            className="mcboaty print"
            placeholder="blurred" loading="eager"
              style={{height:'auto', width:'100vw', maxHeight:'',  objectFit:'cover', overflow:'', border:'0px solid red !important'}}
          />
       
          ) : (
            ""
          )}
</div>



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

  <div className="flexcheek mob print nameblock" style={{marginTop:'', padding:'2rem 2rem 0 2rem', maxHeight:'', fontSize:'clamp(1rem, 1.4vw, 3.2rem)', textShadow:'0 2px 3px #000', color:'#fff', 
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
              style={{ maxWidth:'', height:'', maxHeight:'30vh', position:'relative',  top:'', objectFit:'contain', backgroundSize:'contain', zIndex:''}}
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

<span style={{color:'', fontSize:'160%'}}>{companyname}</span>
{frontmatter.addressText}
<br />
{frontmatter.addressText2}
<br />
<Link state={{modal: true}} to="/contact#info" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'0 auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center' }}>Contact Me</Link>

{showSocial ? (
           <Social />
          ) : (
            ""
          )}

{showCover ? (
  <Link state={{modal: true}} to="/cover/#info" className="print" style={{color:'', fontSize:'', margin:'0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>View cover letter</Link>
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
            <Link state={{modal: true}} to="/contact#info" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'2rem auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center'}}>{frontmatter.cta.ctaText}</Link>
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

{showCover? (

<Link state={{modal: true}} to="/cover#info" className="print" style={{color:'', fontSize:'', margin:'0 auto', textAlign:'center', textDecoration:'underline', maxWidth:'600px', padding:'0 2rem'}}>{frontmatter.coverletter.coverText}</Link>

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
{/* <div style={{height:'100px', border:'1px solid red'}}>&nbsp;</div> */}
</article>
</section>

) : (
  ""
)}
{/* end show Info */}















{/* end show Posts */}
{showPosts ? (

<div id="posts" order="2" name="posts" style={{margin:'0 0 0 0', background:'inherit', minHeight:'100vh', overflow:'', border:'0px solid yellow', display:'flex', verticalAlign:'center'}}>


<div className="horizontal-holder allin60panel" style={{position:'relative', maxHeight:'600px', margin:'5vh 0', border:'0px solid red'}}>
 <div className="horizontal-scroll panels sitegrad movingBG" style={{ scrollSnapType: '', maxHeight:'',}}>
 <div className="" style={{height:'50%', paddingTop:'50%'}}></div>

{openQuote ? (
            
            <div style={{display:'grid', placeContent:'center'}}><blockquote style={{fontFamily:'', minWidth:'300px', textAlign:'left', borderRadius: '12px', fontSize:'clamp(1rem, 1.8vw, 2.8rem)', }}><div style={{padding:'2rem 10% 0px', }}>{openQuote}</div>
        {/* <div className="logofirst" style={{textAlign:'right', margin:'2rem 30% 0px 0px'}}>- Todd Lambert</div> */}
        </blockquote></div>

          ) : (
            ""
          )}

<div className="introspacer" style={{border:'0px solid', width:''}}></div>



        <BlogListHome data={posts} />

        <div style={{justifyContent:'center', alignContent:'center', margin:'20vh auto', textAlign:'center', borderRadius:'8px', minHeight:'100vh', maxWidth:'1000px', padding:'1rem', display:'grid', placeContent:'center'}}>
          <Link className=" " to="/posts/2" style={{textDecoration:'none', color:'inherit', textAlign:'center', height:'', display:'', placeContent:'', border:'1px solid red',}}>View More </Link>
        </div>

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

















{/* {showInfo ? (
  ""
) : (
  ""
)} */}







 











{/* {UnderlayImage ? (
  <div className="no-app" style={{height:'10vh'}} />
) : (
  ""
)} */}













{/* <StaticImage src="../../static/assets/yourphoto.jpg" alt="your alt text" style={{height:'auto', width:'100vw', maxHeight:'100%', position:'', left:'0', top:'', zIndex:'', margin:'2vh 0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}  /> */}













            









{/*  show Resume */}
{showResume ? (

 


<section id="resume" order="4" style={{ display:'', minHeight:'100vh', overflow:'', margin:'0 0 0 0', position:'relative', border:'0px solid blue'}}>



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






{/* <Link state={{modal: true}} stripHash to="/skills#skills" className="button print no-app" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', border:'0px solid', margin:'2rem auto', textAlign:'center', borderRadius:'8px', maxWidth:'300px', padding:'1rem', display:'grid', placeContent:'center'}}>View Skills &amp; Capabilities</Link> */}


{showSkills ? (
  <section className="no-app" id="skills" order="5" style={{ width:'', overflow:'', position:'relative',  justifyContent:'center', alignContent:'center', margin:'5vh auto', textAlign:'center', borderRadius:'8px', minHeight:'100vh', maxWidth:'1000px', width:'40%', padding:'1rem', display:'grid', placeContent:'center', border:'0px solid green', }}>


{/* <dl style={{border:'0px solid red', width:'500px', margin:'2rem auto 2rem auto'}}>
<dt><h2>Should I go or should I stay?</h2><span>100%</span></dt>
  <dd class="percentage percentage-62"><span class="text">Yes!</span> <span class="percent">62%</span></dd>
  <dd class="percentage percentage-58"><span class="text">No!</span> <span class="percent">58%</span></dd>
</dl>  */}


<div className="flexbutt" style={{display:'flex', gap:'100px', marginLeft:'-24vw' }}>
<dl className="flexcheek" style={{border:'0px solid',}}>

<dt style={{border:'0px solid red'}}>
<h2 style={{}}>{frontmatter.skillsTitle}</h2><div>100%</div>
</dt>

      <div
          style={{paddingBottom:'2rem', border:'0px solid yellow'}}
            className="description"
            dangerouslySetInnerHTML={{ __html: SkillsText }}
          />

      </dl>

<dl className="flexcheek" style={{border:'0px solid',marginLeft:''}}>

<dt style={{border:'0px solid red'}}>
<h2 style={{}}>{frontmatter.skillsTitle}</h2><div>100%</div>
</dt>

      <div
          style={{paddingBottom:'2rem', border:'0px solid yellow'}}
            className="description"
            dangerouslySetInnerHTML={{ __html: SkillsText }}
          />

      </dl>

</div>



                 </section>
          ) : (
            ""
          )}




 </div>{/* end scooch */}



 


  
  



{/* <div id="installedbar" className="toolbar print hasapp" style={{position:'relative', bottom:'', width:'100vw', display:'none', flexDirection:'', gap:'', borderTop:'0px solid #555', justifyContent:'', background:'rgba(24, 29, 31, 0.2)', borderRadius:'', marginTop:'', padding:'2rem 0 3rem 0', zIndex:'', }}>


<div className="" order="1" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
 <Link state={{modal: true}} to="/login" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Admin</Link>
 </div>


 <div className="" order="5" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
 <Link state={{modal: true}} to="/notes" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Notes</Link>
 </div>



 {showPosts ? (
  <div order="3" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
<Link state={{modal: true}} to="/posts" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Portfolio</Link>
</div>
) : (
  ""
)}


{showCover ? (
  <div order="2" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
<Link state={{modal: true}} to="/cover" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Cover Letter</Link>
</div>
) : (
  ""
)}






{showSkills ? (
  <div order="3" style={{display:'flex', justifyContent:'center', border:'0px solid red', width:'', margin:'0 auto'}}>
<Link state={{modal: true}} to="/skills#skills" className="button print" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Skills</Link>
</div>
) : (
  ""
)}





</div> */}



<div id="bottom" className="usability" style={{position:'relative', zIndex:'', bottom:'0', display:'flex', placeSelf:'center', placeContent:'center', width:'100%', margin:'0 auto', alignContent:'center', alignItems:'center', justifyContent:'center', border:'0px solid blue', textAlign:'center'}}>
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