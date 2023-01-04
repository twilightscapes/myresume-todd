/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import TimeAgo from 'react-timeago'

import Countdown from 'react-countdown'

const Completionist = () => ""



const PostCard = ({ data }) => {

  const ShowDates = data.frontmatter.showdate

  return (

<section className="child" style={{position:'relative', height:'', overflow:'hidden'}}>

  <article
    className="post-card1"
    style={{display:'', alignItems:'center', justifyContent:'center', width:'100%', height:'', position:'relative', fontSize:'clamp(1rem, 1.2vw, 3rem)', background:'transparent', border:'0px solid blue', }}
  >






    {data.frontmatter.featuredImage ? (

<div>
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
          style={{position:'relative', zIndex:'1', }}
        />
        <div
              style={{
                alignItems: "center",
                backgroundColor: "",
                display: "flex",
                flexDirection:'column',
                justifyContent: "center",
                justifySelf:'center',
                position: "absolute",
                top:'50%',
                left:'50%',
                
          
              }}
           >

           <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>

        </div>
      </Link>



</div>
      
    ) : (
      <Link to={data.frontmatter.slug}><StaticImage className="featured-image" src="../../static/assets/default-og-image.jpg" alt="VidSock Default Image" style={{position:'relative', zIndex:''}} /></Link>
    )}


<div className="post-content" style={{textAlign:'center'}} >


<div className="post-card" style={{border:'0px solid yellow', display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', width:'50vw', margin:'0 auto', textAlign:'center', borderRadius:'0 0 10px 10px', background:'rgba(0, 0, 0, .5)'}}>
<h2 className="title" style={{width:'100%'}}>
  <Link 
    to={data.frontmatter.slug}
  >
    {data.frontmatter.title}
    
  </Link>
</h2>



<p style={{minWidth:'', position:'relative', display:'flex', justifyContent:'center', alignSelf:"center", textAlign:'center', border:'0px solid red', color:'#fff', margin:'0', padding:'0', textShadow:'2px 0 2px #333'}}>

{ data.frontmatter.showdate ? (
              <TimeAgo date={data.frontmatter.date} style={{color:'#fff !important', minWidth:'16vw',}} />
      ) : (
        ""
      )}

</p>



</div>


{ data.frontmatter.nftdrop ? (
            
<div className="" style={{display:'flex', alignSelf:'center',  position:'absolute', bottom:'66px', width:'100vw', margin:'0 auto'}}>

<div className="countdown" style={{display:'flex', justifyContent:'center', maxWidth:'600px',  margin:'0 auto', backdropFilter:'blur(10px)', color:'', textAlign:'center', padding:'1rem', fontSize:'200%', borderRadius:'12px',border:'1px solid #111', textShadow:'1px 2px 0px #000'}}>
<Countdown date={data.frontmatter.nftdrop}>
{/* <Countdown
date={Date.now() + 20000} className="countdown"> */}

<Completionist />
</Countdown>
</div>

</div>

       
          ) : (

            ""
       
          )}






</div>


  </article>
  </section>
  )
  
}

export default PostCard
