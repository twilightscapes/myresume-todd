require("dotenv").config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

const settings = require("./src/util/site.json")

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: false },
  siteMetadata: settings.meta,
  plugins: [
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     apiKey: process.env.SHOPIFY_API_KEY,
    //     password: process.env.SHOPIFY_SHOP_PASSWORD,
    //     storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
    //     shopifyConnections: ["collections"],
    //     salesChannel:"secure3",
    //   },
    // },

{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-copy-linked-files",
          options: {
            destinationDir: "assets",
          },
        },
      ],
    },
  },

  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -70,
      duration: 500,
    }
  },




    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          // include: /assets/ 
          include: /\.svg$/
        }
      }
    },

    {
      resolve: `gatsby-plugin-modal-routing-3`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              // tracedSVG: true,
              loading: "lazy",
            },
          },

          {
            resolve: "gatsby-transformer-remark",
            options: {
              plugins: [
              {
                resolve: "gatsby-remark-better-embed-video",
                options: {
                  width: 800,
                  ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
                  height: 400, // Optional: Overrides optional.ratio.
                  related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
                  noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
                  showInfo: false // Optional: Hides video title and player actions.
                }
              }
              ]
            }
          },
          
        ],
      },
    },
    `gatsby-remark-responsive-iframe`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `MyResume CMS`,
        // htmlFavicon: `/src/img/logo.svg`,
        includeRobots: false,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/img/logo.svg`, // wherever background images are stored
      },
    },
 



    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          settings.ga, // Google Analytics / GA
        ],
      },
    },

    
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: settings.ga,
    //   },
    // },

    // {
		// 	resolve: 'gatsby-plugin-pdf',
		// 	options: {
    //     outputPath: 'static/assets/',
		// 		// allPages: true,
    //     paths: ['/', '/cover', '/skills'],
		// 		// styleTagOptions: {
		// 		// 	content: 'header{display:none;} footer{display:none;} .cookie-bar{display:none;}'
		// 		// }
		// 	},
		// },

    // {
		// 	resolve: 'gatsby-plugin-pdf',
		// 	options: {
		// 		paths: ['/'],
		// 		outputPath: 'static/assets/',
		// 	},
		// },

    `gatsby-plugin-sitemap`,
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://deighleen.com',
    //     sitemap: 'https://deighleen.com/sitemap.xml',
    //     resolveEnv: () => process.env.GATSBY_ENV,
    //     env: {
    //       development: {
    //         policy: [{ userAgent: '*', allow: ['/'] }]
    //       },
    //       production: {
    //         policy: [{ userAgent: '*', allow: '/' }]
    //       }
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `myresume`,
        short_name: `My Resume`,
        start_url: `/?user_mode=app`,
        description: `My Resume`,
        background_color: `#ddd`,
        lang: `en`,
        theme_color: `#222`,
        display: `standalone`,
 icon: `static/assets/logo.svg`, // This path is relative to the root of the site.
 icon_options: {
  purpose: `any maskable`,
},
      icons: [
        {
          src: `static/assets/icon.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `static/assets/icon.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ], // Add or remove icon sizes as desired
      },
    },
    "gatsby-plugin-offline",
  ],
}


