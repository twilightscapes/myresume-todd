import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
          title
          titleDefault
          siteUrl
          description
          image
          twitterUsername
          iconimage
          companyname
          comments
          showfooter
          menu1
          menu2
          menu3
          font1
          siteColor
          }
        }
      }
    `
  )
  return site.siteMetadata
}