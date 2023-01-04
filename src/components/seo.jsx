import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

export function Seo({
  title = "",
  description = "",
  pathname = "",
  image = "",
  children = null,
}) {
  const location = useLocation()
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleDefault
          siteUrl
          description
          image
          twitterUsername
          companyname
        }
      }
    }
  `)

  const {
    // siteTitle,
    titleDefault,
    // siteUrl,
    siteDescription,
    siteImage,
    // hrefLang,
    twitterUsername,
  } = siteMetadata

  const seo = {
    title: title || titleDefault,
    description: description || siteDescription,
    url: pathname ? `${pathname}` : location.href,
    image: `${image || siteImage}`,
    // image = image[0] === "/" ? "https://twilightscapes.com" + image : image
  }


  return (
    <Helmet
      title={title}
      defaultTitle={titleDefault}
      titleTemplate={`%s | ${titleDefault}`}
    >
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/icon.png"
      />






    
      {children}
    </Helmet>
  )
}