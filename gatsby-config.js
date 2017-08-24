const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Scranton Hacks',
    hackathonDate: 'Date: TBA',
    hackYear: '2017',
    sponsorEmail: 'sponsorship@scrantonhacks.com'
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
    }
  ],
}

