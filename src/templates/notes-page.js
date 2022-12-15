import React from "react"
import { graphql, Link } from "gatsby"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"
import { Footer } from "../components/footer"
export const pageQuery = graphql`
  query notesQuery($id: String!) {
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
const Notes = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />


      <div className="container" style={{padding:'2rem 8%', maxWidth:'1024px'}}>


      <div className="mobile"><GoBack /></div>


      <section className="article-header" style={{textAlign:'left', margin:'0', height:'auto'}}>
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
          </section>

        <article dangerouslySetInnerHTML={{ __html: html }} />

      </div>



      <Link to="../" className="print" style={{position:'', bottom:'', border:'0px solid red', width:'200px', margin:'0 auto', textAlign:'center', textDecoration:'underline', padding:'.5rem 2rem', display:'flex', placeContent:'center', justifyContent:'center',borderRadius:'12px 12px 0 0'}}>Return Home</Link>
      {/* <GoBack /> */}
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Layout>
  )
}

export default Notes
