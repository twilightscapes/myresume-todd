import React from "react"
import { Link } from "gatsby"


import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const Login = () => (
  <Layout className="thanks-page">
    <Seo title="Login" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
        width:'80%',
        margin:'60px auto 0 auto',
        minHeight:'100vh'
      }}
    >
<div className=""></div> 
      
      {/* <h1 className="headline1" style={{fontSize:'200%'}}>Got your message</h1> */}
      {/* <p>I should respond shortly, depending on where I am at.</p> */}

      <iframe title="VidSock" id="youtube2" className="blog-video1" width="100%" height="400" src="/admin/" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'40vh', borderRadius:'12px'  }} />

      <div className="spacer33"></div> 
      <Link to="./" className="button">
        Back To Home
      </Link>
    </div>






    <div className="spacer33"></div> 
    {/* <div className="spacer66"></div>  */}
  </Layout>
)

export default Login
