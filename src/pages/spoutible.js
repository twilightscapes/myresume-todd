import React from "react"
// import { Link } from "gatsby"
import { Seo } from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
// import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import styled from "styled-components"
const CustomBox = styled.div`





`


const Code = `
body main.main-content-container div.main-content-container-inner div.right-sb-container{display:none !important;}
body main.main-content-container div.main-content-container-inner div.timeline-container-wrapper{max-width:90vw !important;}
body main.main-content-container div.main-content-container-inner{max-width: 90vw !important;}
`

// const shareButton = document.querySelector('.share-button')
// const shareDialog = document.querySelector('.share-dialog')
// const closeButton = document.querySelector('.close-button')

// shareButton.addEventListener('click', event => {
//   shareDialog.classList.add('is-open')
// })

// closeButton.addEventListener('click', event => {
//   shareDialog.classList.remove('is-open')
// })

const Test = () => (

<>

<Layout>

<Seo
          title={`Spoutible User Styles`}
          description={`Change Spoutible with custom css`}
          image={'https://toddlambert.com/assets/spoutiblle-promo.webp'}
        />

    <CustomBox style={{paddingTop:'80px', textAlign:'center'}}>

    <StaticImage className="" src="../../static/assets/spoutiblle-promo.webp" alt="Code Example" style={{ width:'50%', maxWidth:'48vw', filter:'drop-shadow(2px 2px 2px #000)',}} />


<figure style={{maxWidth:'70vw', margin:'10vh auto',}}>
  <figcaption style={{background:'#111', padding:'1vh 2vw'}}>Spoutible MaxWidth with No Sidebar</figcaption>
 <div style={{ padding:'1vh 2vw', display:'flex', gap:'2vw'}}>

 <StaticImage className="" src="../../static/assets/spoutible-no-sidebar.png" alt="Code Example" style={{ width:'50%', maxWidth:'48vw', filter:'drop-shadow(2px 2px 2px #000)',}} />

<div style={{textAlign:'left'}}>
  <code>{"body main.main-content-container div.main-content-container-inner div.right-sb-container{display:none}"}</code>
<br /><br />
  <code>{"body main.main-content-container div.main-content-container-inner div.timeline-container-wrapper{max-width:90vw}"}</code>
  <br /><br />
  <code>{"body main.main-content-container div.main-content-container-inner{max-width: 90vw}"}</code>
</div>

  </div>
</figure>



<h2 style={{fontSize:'3rem'}}>Apple Users</h2>

On iOS Safari:
Download CSS Makeover<br /> <a href="https://apps.apple.com/us/app/makeover-custom-css/id1602361167">https://apps.apple.com/us/app/makeover-custom-css/id1602361167</a>

<br /><br />


On Desktop Safari:
Download Tamperish <br /> <a href="https://apps.apple.com/us/app/tamperish-for-safari/id1516885392?mt=12">https://apps.apple.com/us/app/tamperish-for-safari/id1516885392?mt=12</a>

<br /><br />



<h2 style={{fontSize:'3rem'}}>Chrome Users</h2>
On Chrome:
Download User CSS  <br /> <a href="https://chrome.google.com/webstore/detail/user-css/okpjlejfhacmgjkmknjhadmkdbcldfcb?hl=en">https://chrome.google.com/webstore/detail/user-css/okpjlejfhacmgjkmknjhadmkdbcldfcb?hl=en</a>


<br /><br />
<br /><br />

</CustomBox>
</Layout>

</>

)

export default Test
