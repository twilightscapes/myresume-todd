import React from "react"
// import { Link } from "gatsby"


// import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import styled from "styled-components"
const CustomBox = styled.div`
@media (max-width: 48em) {
  .player-wrapper{height:90vh !important;}
}
@media (min-width: 58em) {

}

body{padding-top:100px !important;}
#woop{position:absolute; z-index:1 !important;}
`


const Test = () => (

<>

<Layout>

    <CustomBox style={{}}>




<iframe title="VidSock" id="youtube2" className="blog-video1" width="100%" height="400" src="/admin/" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100vh', minHeight:'100vh', border:'0px solid yellow', borderRadius:'12px', padding:'60px 0 0 0'  }} />
        


</CustomBox>
</Layout>

</>

)

export default Test
