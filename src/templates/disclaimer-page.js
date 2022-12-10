import React from "react"
import { graphql } from "gatsby"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"
import { Footer } from "../components/footer"
export const pageQuery = graphql`
  query DisclaimerQuery($id: String!) {
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
const Disclaimer = ({ data }) => {
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




      <GoBack />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Layout>
  )
}

export default Disclaimer
