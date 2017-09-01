const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Scranton Hacks 2017',
    description: '',
    hackathonDate: 'Date: TBA',
    hackYear: '2017',
    sponsorEmail: 'sponsorship@scrantonhacks.com',
    hackathonLocation: 'University of Scranton Byron',
    social: {
      facebook_link: 'https://www.facebook.com/groups/397712937282963/',
      twitter_link: 'https://twitter.com',
      instagram_link: 'https://www.instagram.com/scranton_hacks/',
    },
    landingContent: {
      about: "ScrantonHacks is a 24 Hour hackathon at the University of Scranton. We bring together students, regardless of background, to inspire and develop creative solutions to today's problems.",
      motto: {
        build: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem neque, suscipit non porttitor non, ullamcorper imperdiet elit. Curabitur arcu tortor, scelerisque eget feugiat eget, dictum in nisl ",
        connect: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem neque, suscipit non porttitor non, ullamcorper imperdiet elit. Curabitur arcu tortor, scelerisque eget feugiat eget, dictum in nisl",
        learn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem neque, suscipit non porttitor non, ullamcorper imperdiet elit. Curabitur arcu tortor, scelerisque eget feugiat eget, dictum in nisl",
      },
      //logos and stuff go here
      sponsors: {
        platinum: {
          facebook_example: {
            name: "", // name of the sponsor
            logo: "", // path of the logo
          }
        },
        gold: {
        },
        bronze: {
        }
      },
    },
  },
  pathPrefix: '/',
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
    'gatsby-plugin-react-helmet'
  ],
}

