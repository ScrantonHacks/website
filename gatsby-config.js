const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Scranton Hacks',
    hackathonDate: 'Date: TBA',
    hackYear: '2017',
    sponsorEmail: 'sponsorship@scrantonhacks.com',
    hackathonLocation: 'University of Scranton Byron',
    social: {
      facebook_link: 'https://www.facebook.com/groups/397712937282963/',
      twitter_link: 'https://twitter.com',
      instagram_link: 'https://www.instagram.com/scranton_hacks/',
    }
  },
  pathPrefix: '/gatsby-starter-grommet',
  plugins: [
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    },
    `gatsby-plugin-styled-components`,
  ],
}

