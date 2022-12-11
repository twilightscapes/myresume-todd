import * as React from "react"
import { Layout } from "../components/layout"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import GoBack from "../components/goBack"
import { Link } from "gatsby"












export default function NotesPage() {
  const { companyname } = useSiteMetadata()
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Disclaimer`} /> */}


<section className="outer section section--gradient" >
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>

<h1 className="title" style={{fontSize:'50px'}}>{companyname} My Notes</h1>
    


<p></p>


<h3>You got this!</h3>
<p>Sit up straight, make eye contact, and speak with thought</p>

<h3>Is this legal?</h3>
<p>Yes, it is 100% legal. There is no hacking or funny business of any kind going on. </p>




			

    </div>
    <Link to="../" className="print" style={{position:'', bottom:'', border:'0px solid red', width:'200px', margin:'0 auto', textAlign:'center', textDecoration:'underline', padding:'.5rem 2rem', display:'flex', placeContent:'center', justifyContent:'center',borderRadius:'12px 12px 0 0'}}>Return Home</Link>
      {/* <GoBack /> */}
    </section>
    
    
    </Layout>

  )
}
