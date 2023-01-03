/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import GoBack from "../components/goBack"
import { Helmet } from "react-helmet"
export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    } 
  }
`

const Contact = ({ data }) => {
  const { showNav } = useSiteMetadata()
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (


    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Helmet>
  <body className="contactpage" />
</Helmet>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />



{showNav ? (
    <div className="spacer" style={{height:'80px', border:'0px solid yellow'}}></div>
        ) : (
          ""
        )}

      <div className="wrapper" style={{padding:'20px 1rem 0 1rem'}}>
        
        <h1 style={{fontSize:'130%'}}>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </div>

        <div className="wrapper">
      <form
        className="contact-form"
        action="/thanks"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="flexbutt" style={{justifyContent:'center', justifyItems:'center'}}>
        <p style={{margin:'0 1rem',}}>
          <label>
            <input type="text" name="name" placeholder="your name" required />
          </label>
        </p>
        <p style={{margin:'0 1rem',}}>
          <label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </label>
        </p>
        <p style={{margin:'0 1rem'}}>
          <label>
          <input type="hidden" name="subject" placeholder="Subject" value="MyResume form response" />
          </label>
        </p>
        </div>
        
        <div>
        <p style={{margin:'0 1rem',}}>
          <label>
            <textarea name="message" placeholder="your message" required></textarea>
          </label>
        </p>


        <div className="" style={{fontSize: '100%', padding: '', textAlign: 'center', border:'0px solid red'}}> 
        
        {/* <label htmlFor="consent" style={{color:'inherit', border:'none', outline:'none', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <input type="checkbox" name="consent" aria-checked checked required style={{ display:'inherit', transition: 'inherit', boxSizing: 'inherit', width:'20px', height:'', background:'inherit', paddingTop:''}} /> &nbsp; I want to communicate by email.
        </label> */}

          </div>


        <p className="text-align-center" style={{marginRight:'', color:'#fff', textAlign:'center'}}>
          <button
            className="button"
            
            type="submit"
          >
            Send Message{" "}
            <span className="icon -right">
              <RiSendPlane2Line />
            </span>
          </button>
        </p>
        </div>

        <div style={{fontSize: '80%', padding: '1rem 3%', textAlign: 'center', display:'flex', justifyContent:'center'}}><Link className="print" style={{color:'', fontSize:'', margin:'', textAlign:'center', maxWidth:'', padding:'1rem 2rem', display:'', justifyContent:'', textDecoration: 'underline',}} state={{modal: true}} to="/privacy">Privacy Policy</Link><Link to="../" className="print" style={{color:'', fontSize:'', margin:'', textAlign:'center', maxWidth:'', padding:'1rem 2rem', display:'', justifyContent:'', textDecoration: 'underline',}}>Return Home</Link>
                </div>
      </form>
    </div>
      {/* <GoBack /> */}
      <br />
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}