const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Scranton Hacks 2017',
    description: '',
    url: 'http://scrantonhacks.com',
    hackathonDate: 'Date: TBA',
    hackYear: '2017',
    sponsorEmail: 'sponsorship@scrantonhacks.com',
    hackathonLocation: 'University of Scranton Byron',
    //Name will translate to the 'icon' of this element.
    //Make sure to follow font-awesome documentation on what icons are what names.
    social: [
      {
        name: 'facebook',
        size: '2x',
        link: 'https://www.facebook.com/groups/397712937282963/'
      },
      {
        name: 'twitter',
        size: '2x',
        link: 'https://twitter.com/ScrantonHacks'
      },
      {
        name: 'instagram',
        size: '2x',
        link: 'https://www.instagram.com/scranton_hacks/'
      }
    ],
    landingContent: {
      about: "ScrantonHacks is a 24 Hour hackathon at the University of Scranton. We bring together students, regardless of background, to inspire and develop creative solutions to today's problems.",
      motto: {
        build: "We believe in using our technical skill to build world-class solutions to the problems facing society today.",
        connect: "Connect with the other leaders in your field - expand your perspectives, broaden your horizons, and build lasting networks.",
        learn: "We exist to the complement the knowledge and empower todays up-and-coming hackers.",
      },
      team: [
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Andrew Plaza',
          title: 'Benevolent Dictator for Life',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'John Prendergast',
          title: 'Designated Director of Festivities',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Regita Handijaya',
          title: 'Criminal Mastermind',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Alex Thoennes',
          title: 'Observer of all Things',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Peter Zabiegala',
          title: 'Ruthless Corporate Director',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Clarence Gallagher',
          title: 'Dark Master of All',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Sean Batzel',
          title: 'Website Defacer',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Brian Dauer',
          title: 'Supervillain Extraordinaire',
        },
        {
          image: '/headshots/andrew_plaza.jpeg',
          name: 'Liam O\'Hare',
          title: 'Master Evil Genius',
        },
      ],
      //logos and stuff go here
      //tier 1: largest
      //tier 2: medium
      //tier 3: small
      //order does not matter
      sponsors: [
        { // Facebook
          logo: "/sponsors/facebook_sponsor.svg", // path of the logo
          tier: 1,
        },
        { // Google
          logo: "/sponsors/google.png",
          tier: 2,
        },
        { // Baidu
          logo: "/sponsors/baidu.png",
          tier: 3,
        },
        {
          logo: "/sponsors/Vanguard-Logo.jpg",
          tier: 1,
        },
        {
          logo: "/sponsors/android.png",
          tier: 3,
        },
        {
          logo: "/sponsors/apple.png",
          tier: 2,
        },
        {
          logo: "/sponsors/redhat.png",
          tier: 3,
        },
      ],
      partners: [
        {
          logo: "/sponsors/mlh.svg",
        }
      ],
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
