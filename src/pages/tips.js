import * as React from "react"
import { Layout } from "../components/layout"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import GoBack from "../components/goBack"
import { Link } from "gatsby"
import Tips from "../components/tippanel"











export default function TipsPage() {
  // const { companyname } = useSiteMetadata()
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Disclaimer`} /> */}


<section className="outer section section--gradient" >
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
{/* 
<h1 className="title" style={{fontSize:'50px'}}>{companyname} Tips</h1> */}
    
<Tips />

<p></p>







			

    </div>

    <Link to="../" className="print" style={{position:'', bottom:'', border:'0px solid red', width:'200px', margin:'0 auto', textAlign:'center', textDecoration:'underline', padding:'.5rem 2rem', display:'flex', placeContent:'center', justifyContent:'center',borderRadius:'12px 12px 0 0'}}>Return Home</Link>
      {/* <GoBack /> */}
    </section>
    
    
    </Layout>

  )
}
