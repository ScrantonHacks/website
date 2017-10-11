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
      twitter_link: 'https://twitter.com/HacksScranton',
      instagram_link: 'https://www.instagram.com/scranton_hacks/',
    },
    landingContent: {
      about: "ScrantonHacks is a 24 Hour hackathon at the University of Scranton. We bring together students, regardless of background, to inspire and develop creative solutions to today's problems.",
      motto: {
        build: "Our philosophy is centered in using our technical skills to build solutions to the problems facing society.",
        connect: "Connect with the other leaders in your field - expand your perspectives, broaden your horizons, and build lasting networks.",
        learn: "Our main mission is to facilitate the education of today's up-and-coming hackers, programmers, and everybody who makes our world work. We have a very real hope that we might be able to introduce our members and the attendees of our hackathons to things they've never seen before and empower them to hack the world.",
      },
      team: {
          andrew: {
              image: '',
              name: 'Andrew Plaza',
              title: 'Grand Poobah',
          }
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
