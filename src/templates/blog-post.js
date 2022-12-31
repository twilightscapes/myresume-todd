/** @jsx jsx */
// import React from "react"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
// import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
// import CommentBox from "../components/commentbox"
// import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Countdown from 'react-countdown'
// import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { Footer } from "../components/footer"
// import {CopyToClipboard} from 'react-copy-to-clipboard'
import ReactPlayer from 'react-player/lazy'
// import YouTubed from "../pages/youtube"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
// import GoBack from "../components/goBack"
// import { BiLeftArrow } from "react-icons/bi"
import { ImPlay } from "react-icons/im"
// import TimeAgo from 'react-timeago'
import styled from "styled-components"
// import Theme from "../components/theme"
const CustomBox = styled.div`
@media (max-width: 48rem) {
  .home-posts{flex-direction:column !important; width:90% !important; margin:0 auto !important;}
}
`


const Pagination = props => (
  <div className="pagination -post">
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
      <Link className="button" to={props.previous.frontmatter.slug + "/"} rel="prev">
            {/* <p
              style={{
                color: "inherit",
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              
            </p> */}
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
       <Link title="Go Back" className="button " to="/#posts" style={{}}>
Go Back
</Link>
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link className="button" to={props.next.frontmatter.slug + "/"} rel="next">
            {/* <p
              style={{
                color: "inherit",
              }}
            >
              {" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p> */}
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)







const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    const { showNav } = useSiteMetadata()
    // const NftLink = frontmatter.nftlink
    // const NftRedeem = frontmatter.nftredeem
    // const NftDrop = frontmatter.nftdrop



  const Svg = frontmatter.svgImage
  // const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }
function AddSvg(){
  const svgUrl = frontmatter.svgImage.publicURL



  return (
    <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object>
  )
}


const IsNft = frontmatter.isnftforsale
// const ShowOriginal = frontmatter.youtubeshoworiginal
// const ShareThis = frontmatter.sharethis
// const Comments = frontmatter.comments

const YouTubeStart = frontmatter.youtubestart
const YouTubeEnd = frontmatter.youtubeend
const YouTubeMute = frontmatter.youtubemute
const YouTubeControls = frontmatter.youtubecontrols
const YouTubeAutostart = frontmatter.youtubeautostart









const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber + ""
  const YouTube = frontmatter.youtuber








  

  function Iframer() {
    const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber

    return (

 <div>
              <ReactPlayer
              className='react-player66'
              url={iframeUrl}
              // url={[
              //   iframeUrl,
              //   Suggestion1,
              //   Suggestion2,
              //   Suggestion3
              // ]}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
                },
              }}
              loop
              playing
              playsinline
              playIcon={
                <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100%', height:'100%', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'', paddingTop:''}}>
    
            {/* <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'', margin:'0 auto'}}> */}
              

            {Image ? (
            <GatsbyImage
            image={Image}
            alt={frontmatter.title + " - Featured image"}
            className="featured-image1 layer1 homepage-bg1"
            style={{width:'100vw', height:'100vh',maxHeight:'100vh', position:'absolute', top:'', zIndex:'', objectFit:'cover', overflow:'hidden', border:'0px solid red !important'}}
          />
          ) : (

 ""
       
               )}

               
            <div style={{display:'flex', flexDirection:'column', placeContent:'center', placeSelf:'center', justifyContent:'center', alignContent:'center', alignItem:'center', verticalAlign:'center', height:'', margin:'0 auto 0 auto', width:'100%', border:'0px solid yellow'}}>

            {iconimage ? (
        
        <img className="" src={iconimage} width="" height="" alt="Logo" style={{ width:'50vw', maxWidth:'30vw', maxHeight:'', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important', objectFit:'contain', backgroundSize:'contain', border:'0px solid yellow', display:'flex', justifyContent:'center', margin:'0 auto'}} />
                  ) : (
                    ""
                  )}

                <div style={{ fontWeight:'bold', padding:'0 1rem', margin:'0 auto', fontSize:'clamp(1.2rem, 2.8vw, 3.4rem)',  borderRadius:'12px', border:'0px solid #333', filter:'drop-shadow(2px 2px 2px #000)', }}>Play <ImPlay style={{margin:'0 auto', width:'100px', fontSize:'60px'}} /></div>
                
            </div>

            
    
              {/* <div style={{position:'relative', maxWidth:'', margin:'0 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important', minHeight:'', border:'2px solid red !important'}}> */}

              {/* <object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{ overflow:'hidden', border:'0px solid red', zIndex:'0', width:'30vw', maxWidth:'', height:'auto', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object> */}


      {/* <img className="homepage-bg1" src={iconimage} width="" height="" alt="MyResume" style={{ width:'', height:'', maxHeight:'45vh',  background:'transparent !important',}} /> */}


      
{/* 
    </div> */}
          
              
  
              {/* </div> */}
              
              </button>}
                light="../assets/transparent.png"
              />
</div>

    )
  }






  function Iframer2() {
    const iframeUrl2 = "https://www.youtube.com/embed/" + frontmatter.youtuber
    return (

<div>
<ReactPlayer
          className='react-player66'
          url={iframeUrl2}
          width="100%"
          height="100%"
          style={{zIndex:'0'}}
          playing
          playsinline
          config={{
            youtube: {
              playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:0  }
            },
          }}
          playIcon={
            <button aria-label="Click To Play" className="clickplay" style={{position:'relative', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
              
      
      
      
        <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
          <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
          <span className="headline" style={{fontWeight:'bold', padding:'0 0 0 0',}}>Click To Play</span>
          
          </div>
          </button>}
      
      
      
            light="../assets/transparent.png"
          />
</div>



    )
  }

  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend

  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (

<ReactPlayer
          className='react-player67'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="100%"
          height=""
          style={{marginTop:'0px', position:'relative'}}
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
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div className="popped" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.2rem', fontSize:'2rem', background:'rgba(0,0,0,0.30)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)'}}><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000)'}} /><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}>Audio</div></div>
          
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     




    )
  }





  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }



  const { siteUrl } = useSiteMetadata()

// const Completionist = () => <div style={{minWidth:'50%', width:'100%', maxWidth:'100vw', }}>
//   { NftRedeem ? (
//       ""
      // <a href={NftRedeem} style={{fontSize:'1.4rem', display:'flex', alignSelf:'center', justifySelf:'center', width:'', maxWidth:'400px',  margin:'10px auto',  textAlign:'center', justifyContent:'center', border:'1px solid', borderRadius:'12px', color:'green', textShadow:'1px 1px 0px #666',}}>REDEEM UNLOCKABLE CONTENT</a>
      // ) : (
      //   ""
      // )}
  {/* <nft-card style={{}} contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e" tokenId="14583650834310525071617320783641503123203461641321595508191183187330132344833"> </nft-card> */}
  // </div>

const { iconimage } = useSiteMetadata()

  return (
    
    <Layout className="page">
<CustomBox style={{}}>
<Helmet>
  <body className="blogpost" />
  {/* <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script> */}
</Helmet>

      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        
        image={ siteUrl + getSrc(frontmatter.featuredImage) }

        article={true}
      />


  
{/* <div className="video-background1" style={{position:'absolute', top:'0', right:'0', left:'0', zIndex:'0', height:'100vh', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}> */}


{showNav ? (
  // <div style={{height:'38px'}} />
  <div className="spacer" style={{height:'60px', border:'0px solid yellow'}}></div>
) : (
  ""
)}

<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'auto', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)', aspectRatio:'16 / 9' }}>







<div style={{display:'grid', placeContent:'top', width:'100vw', height:'', overflow:'', position:'absolute', top:'0', zIndex:'', }}>


{Image ? (
            <GatsbyImage
            image={Image}
            alt={frontmatter.title + " - Featured image"}
            className="featured-image1 layer1"
            style={{height:'auto', width:'100vw', maxHeight:'100%', position:'absolute', top:'', zIndex:'', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}
          />
            


            
            
          ) : (

       ""
            // <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'60vh', position:'absolute', zIndex:'0', bottom:'',border:'0px solid !important', objectFit:'contain',}} />
  
          )}


       
</div>






 











{/* {Svg2 ? (
            <AddSvg2 />
       
          ) : (
            ""
          )} */}

  {/* {OverlayImage ? (
            <GatsbyImage
              image={OverlayImage}
              alt={frontmatter.title + " - image"}
              className="layer2"
              style={{height:'100vh', zIndex:'1', postion:'absolute', bottom:'0', left:'0', objectFit:'contain' }}
            />
          ) : (
            ""
          )} */}









{ !YouTube ? (
            ""
       
          ) : (
            <Iframer />
          )}







{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100%', overflow:'hidden', position:'absolute', bottom:'0', zIndex:'0',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}

{Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}



      </div>





{/* <br />
<br /> */}






{ !YouTube2 ? (
            ""
       
          ) : (
            <Iframer3 />
          )}




<article className="blog-post">
        




  


      {/* <span className="mobile"><GoBack /></span> */}
      <header>
          <section className="article-header" style={{textAlign:'center', margin:'0 4%', height:'auto', color:''}}>
          
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            {/* <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} /> */}
          </section>
        </header>
        <div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>
 <br />




<div className="home-posts" style={{clear:'both', display:'',  justifyContent:'space-around', textAlign:'left', width:'90vw', margin:'0 auto', height:'', maxHeight:'', border:'0px solid blue'}}>



<div style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow'}}>

{/* {IsNft ? (
            <strong style={{padding:'2rem 1rem'}}>Artist's Notes:</strong>
       
          ) : (
            ""
          )} */}



      <div
        className="blog-post-content" style={{ padding:'0 2rem', fontSize:'1.1rem', textAlign:'left', width:'100%', maxWidth:'800px', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />      
     
     <br /><br />
 
</div>






       


 </div>





      {/* <object data="/art/boatswains-blunder" width="100%" height="1000"></object> */}


      </article>




      {/* { ShareThis && (<div style={{width:'500px', padding:'0', margin:'0 auto',display:'flex', alignSelf:'center', justifyContent:'center', borderRadius:'', overflow:'hidden', border:'0px solid red'}}>
            <ShareSocial />
            </div>)} */}


      {frontmatter.sharethis ? (
        <span>
        <div style={{maxWidth:'90vw', padding:'0', margin:'0 auto',display:'flex', flexDirection:'', alignSelf:'center', justifyContent:'center', textAlign:'center', marginBottom:'-40px',  textAlign:''}}>please share this link:</div>
       <div style={{maxWidth:'70vw', padding:'0', margin:'0 auto',display:'flex', flexDirection:'', alignSelf:'center', justifyContent:'center', textAlign:'center', overflow:'hidden', border:'0px solid red'}}>
       <ShareSocial />
       </div>
       </span>
          ) : (
            ""
          )}

<br />




{frontmatter.comments ? (
<div style={{width:'80%', padding:'0', margin:'0 auto', display:'flex', justifyContent:'center'}}>
  
{/* <CommentBox /> */}

Comments here
    
       </div>
       
          ) : (
            ""
          )}





{frontmatter.youtubeshoworiginal ? (
          <div style={{position:'relative', width:'100%', maxWidth:'800px', margin:'2rem auto 0 auto', textAlign:'center', display:'flex', flexDirection:'column', fontSize:'100%', borderRadius:'12px' }}>Click to view original video
<div style={{maxWidth:'70vw', width:'100%', height:'440px', maxHeight:'40vh', padding:'0', position:'relative', bottom:'0', textAlign:'center', border:'0px solid blue', margin:'0 auto', borderRadius:'12px', background:'rgba(78, 74, 74, 0.3)'}}>
  
                    <Iframer2 />
                    
       </div></div>
       
          ) : (
            ""
          )}


      {/* <div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div> */}





{/* <Countdown
    // date={Date.now() + 10000}
    date='2022-10-03T04:02:03'
    intervalDelay={0}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  /> */}


      






   
<br /><br />



       








      

      

   

   {/* <GoBack /> */}

   {/* <div style={{display:'flex', justifyContent:'center', color:'#ccc'}}><Link title="Go Back" className="navbar-item txtshadow " to="/">
Go Back
</Link></div> */}

<div id="bottom" className="usability" style={{position:'relative', zIndex:'', bottom:'0', display:'flex', placeSelf:'center', placeContent:'center', width:'100%', margin:'0 auto', alignContent:'center', alignItems:'center', justifyContent:'center', border:'0px solid blue', textAlign:'center'}}>
{/* <Theme /> */}
<div id="branding" style={{position:'relative', left:'0', bottom:'5px', fontSize:'90%'}}><a href="https://myresume.site" target="_blank" rel="noreferrer">MyResume®</a></div>
</div>


   <Footer />
   </CustomBox>
    </Layout>




  )
}



export default Post

export const pageQuery = graphql`
  query BlogPostQueryBlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
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
        youtubeshoworiginal
        youtubestart
        youtubeend
        audiostart
        audioend
        youtubemute
        youtubecontrols
        youtubeautostart
        comments
        sharethis
        svgzindex
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        svgImage{
          publicURL
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`