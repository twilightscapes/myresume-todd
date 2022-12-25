import React from "react"
// import { Link } from "gatsby"

import styled from "styled-components"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const CustomBox = styled.div`
#nc-root iframe main{
  background-color:#ff0000 !important;
}

`

const Login = () => (
  <CustomBox style={{}}>
  <Layout className="thanks-page">
    <Seo title="Login" />

 
      {/* <h1 className="headline1" style={{fontSize:'200%'}}>Got your message</h1> */}
      {/* <p>I should respond shortly, depending on where I am at.</p> */}

      <iframe title="VidSock" id="youtube2" className="blog-video1" width="100%" height="400" src="/admin/" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'40vh', borderRadius:'12px', margin:'60px 0 0 0'  }} />








    
    {/* <div className="spacer66"></div>  */}
  </Layout>
  </CustomBox>
)

export default Login
