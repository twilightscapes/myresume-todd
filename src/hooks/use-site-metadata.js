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
          showInfo
          showCover
          showFeature
          showPosts
          showResume
          showSocial
          showSkills
          showNav
          showNav2
          menu1
          menu2
          menu3
          menu4
          font1
          siteColor
          
          }
        }
      }
    `
  )
  return site.siteMetadata
}