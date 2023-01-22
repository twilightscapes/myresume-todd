/** @jsx jsx */
import { jsx } from "theme-ui"
// import React, { useState, useRef } from "react";
import React from "react"
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
// import { FaHandPointDown } from "react-icons/fa"
// import ScrollAnimation from 'react-animate-on-scroll'
// import { StaticImage } from "gatsby-plugin-image"
import { ImPlay } from "react-icons/im"
import ReactPlayer from 'react-player/lazy'
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine} from "react-icons/ri"
// import { Footer } from "../components/footer"

import PostCard from "../components/post-card"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"





const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

export const blogListQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {template: {eq: "blog-post"}}}
    limit: $limit
    skip: $skip
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
const Pagination = props => (





  <div className="pagination" sx={styles.pagination} style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'50vh', color:'#ccc'}}>
    <h1>Archive of Posts:</h1>
    <ul style={{background:'#222', width:'80vw', position:'relative', top:'', margin:'0 auto', padding:'0 10%', zIndex:'1', textAlign:'', borderRadius:'12px', textDecoration:'none', color:'#fff'}}>
      {!props.isFirst && (
        <li style={{}}>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1 + "/"}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage + "/"} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/posts/"
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }




    
    


    return (
      
      <Layout className="blog-page1">
<Helmet>
  <body className="bloglist" />
</Helmet>
        <Seo
          title={"Archive — Page " + currentPage + " of " + numPages}
          description={
            "Archive page " + currentPage + " of " + numPages
          }
        />
 




        <div id="" className="wrap-element " style={{overflow:'hidden', width:'100vw', height:'100vh', position:'fixed', top:'0'}}>
<ReactPlayer
         className='frontbg'
         url=""
         width="100%"
         height="100vh"
         playing
            controls={false}
            light={false}
            loop={true}
            muted={true}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:20, end:41, mute:1 }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'5', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
          <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
            
  
            <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    {/* <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} /> */}
  </div>
        
            <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
            </div>
            </button>}
         
          /></div>




<div className="horizontal-holder allin60panel" style={{position:'relative', maxHeight:'790px', margin:'8vh 0', border:'0px solid red'}}>


 <div className="horizontal-scroll panels sitegrad movingBG" style={{ scrollSnapType: '', maxHeight:'',}}>

 <div className="introspacer" style={{border:'0px solid', width:''}}></div>
 <div className="" style={{height:'50%', paddingTop:'50%'}}></div>
 {/* <Pagination className="mobilehide" {...props} /> */}

 {/* <div className="" style={{height:'50%', paddingTop:'50%'}}></div> */}

 {posts}
<Pagination {...props} />
</div> 
</div>


      </Layout>
    )
  }
}

export default BlogIndex
