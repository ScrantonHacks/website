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
            meetTeam: "Meet the ScrantonHacks Organization Team",
            motto: {
                build: "We believe in using our technical skill to build world-class solutions to the problems facing society today.",
                connect: "Connect with the other leaders in your field - expand your perspectives, broaden your horizons, and build lasting networks.",
                learn: "We exist to the compliment the knowledge and empower todays up-and-coming hackers.",
            },
            team: {
                andrew: {
                    image: '',
                    name: 'Andrew Plaza',
                    title: 'Benevolent Dictator for Life',
                },
                regita: {
                    image: '',
                    name: 'Regita Handijaya',
                    title: 'Criminal Mastermind',
                },
                peter: {
                    image: '',
                    name: 'Peter Zabiegala',
                    title: 'Ruthless Corporate Director',
                },
                clarence: {
                    image: '',
                    name: 'Clarence Gallagher',
                    title: 'Dark Master of All',
                },
                sean: {
                    image: '',
                    name: 'Sean Batzel',
                    title: 'Website Defacer',
                },
                john: {
                    image: '',
                    name: 'John Prendergast',
                    title: 'Designated Director of Festivities',
                },
                brian: {
                    image: '',
                    name: 'Brian Dauer',
                    title: 'Supervillain Extraordinaire',
                },
                liam: {
                    image: '',
                    name: 'Liam O\'Hare',
                    title: 'Master Evil Genius',
                },
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
