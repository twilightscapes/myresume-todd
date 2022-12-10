import * as React from "react"
import { Layout } from "../components/layout"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import GoBack from "../components/goBack"













export default function DisclaimerPage() {
  const { companyname } = useSiteMetadata()
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Disclaimer`} /> */}


<section className="outer section section--gradient" >
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>

<h1 className="title" style={{fontSize:'50px'}}>{companyname} FAQ</h1>
    


<p></p>


<h3>How did this site come to be?</h3>
<p>As a web developer I was trying to use YouTube's APIs to put video onto one of my websites. While playing around I found that I could create streams that did not have ads. After lots and lots of testing and adjusting things, I was able to bring this tool forward and release it to the public.</p>

<h3>Is this legal?</h3>
<p>Yes, it is 100% legal. There is no hacking or funny business of any kind going on. Youtube provides the necessary tools themselves to make this site possible. I simply followed their lead and this was the output as it was a useful tool to me personally. </p>

<h3>Does it cost anything?</h3>
<p>Nope! It costs you nothing at all. That said, I have spent countless hours bringing this project to light and making it free to everyone. If you feel like helping an independent artist and creator out, feel free to contact me! </p>
<h3>If it's free, how do you make money?</h3>
<p>That's just it. I am not making any money. In fact this site actually costs me a lot of money to operate. I do it because of the exposure for my web and creative services business and my photography.</p>
<h3>Doesn't this hurt content creators?</h3>
<p>In some ways, sure, it probably does. However, so does using software such as AdBlockers that completely deny creators a way to monitize their content at all. In the case of AdFree, we purposely show the video creator's playlist and we link directly out to their content where it can be directly monetized. We've also disabled the "auto advance" that helps keep you from plummeting down the infamous "YouTube Rabbit Hole".</p>
<h3>I've got copyright concerns?</h3>
<p>I'm an independent artist and business owner. If you have any concerns, I want to hear about them. But I can assure you that this site does NOT infringe on any rights nor does it harm any interests of anyone.</p>



			

    </div>
    <GoBack />
    </section>
    
    
    </Layout>

  )
}
