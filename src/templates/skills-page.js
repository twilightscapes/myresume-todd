import React from "react"
import { graphql, Link } from "gatsby"

// import GoBack from "../components/goBack"

export const skillspageQuery = graphql`
  query skillsQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const Skills = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (

<>

      <div className="container" style={{padding:'2rem 0', maxWidth:'1024px'}}>


      {/* <div className="mobile"><GoBack /></div> */}


      <dl>
  <dt>
  <h2>{frontmatter.title}</h2><span>100%</span>
  </dt>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        </dl>
      </div>



      {/* <Link to="../" className="print" style={{position:'', bottom:'', border:'0px solid red', width:'200px', margin:'0 auto', textAlign:'center', textDecoration:'underline', padding:'.5rem 2rem', display:'flex', placeContent:'center', justifyContent:'center',borderRadius:'12px 12px 0 0'}}>Return Home</Link>

      <br />
      <br />
      <br />
      <br />
      <Footer /> */}
</>
  )
}

export default Skills
