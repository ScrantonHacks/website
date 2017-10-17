import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import HackHero from '../components/HackHero';
import BackgroundParallaxVideo from '../components/BackgroundParallaxVideo';
import SubscribeSplash from '../components/SubscribeSplash';
import SponsorCrumb from '../components/SponsorCrumb';
import ScrantonHacksLogo from '../components/ScrantonHacksLogo';
import ThreeIconsMotto from '../components/ThreeIconsMotto';
import TeamPage from '../components/TeamPage';
import SponsorList from '../components/SponsorList';
import FAQPage from '../components/FAQPage';

import Parallax from 'react-springy-parallax';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';
import styled from 'styled-components';


const TextContainer = styled.div`
width: 45%;
margin:auto;
color: #ddd;
`;

const H3 = styled.h3`
font-size: 2em;
`;

const H2 = styled.h2`
font-size: 2em;
`;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteMetadata: props.data.site.siteMetadata,
      landingContent: props.data.site.siteMetadata.landingContent,
    }
  }

  render() {
    return (
      <div>
        <MetaTags
          title={this.state.siteMetadata.title}
          description={this.state.siteMetadata.description}
          path={``}
          tags={"hackathon, scranton, scrantonhacks, google, facebook, sponsors, mlh, github"}
          siteUrl={this.state.siteMetadata.url}
        />
        <HackHero name="Title Page" offset={0} scrantonVideo>
          <div className="text-center text-white">
            <ScrantonHacksLogo />
            <SubscribeSplash title={this.state.siteMetadata.title} />
            <SponsorCrumb data={this.state.siteMetadata} />
          </div>
        </HackHero>

        <HackHero name="About" offset={1} title={[
            "echo '#! /bin/ScrantonHacks' > about.sh",
            "About Us"]} gradientBg>
          <TextContainer>
            <H3>{this.state.landingContent.about}</H3>
          </TextContainer>
          <ThreeIconsMotto motto={this.state.landingContent.motto} />
        </HackHero>

        <HackHero
            name="FAQ"
            offset={2}
            title={["echo '#! /bin/ScrantonHacks' > questions.sh", "FAQ"]}
            gradientBg
            factor={1}
        >
        <FAQPage questionList={this.state.landingContent.questions} />
        </HackHero>

        <HackHero
          name="Team Page"
          offset={3}
          title={["echo '#! /bin/ScrantonHacks' > team.sh", "Meet the Team"]}
          gradientBg
          factor={2}
        >
          <TeamPage team={this.state.landingContent.team} />
        </HackHero>

        <HackHero
          name="Sponsors"
          offset={4}
          title={[
            "echo '#! /bin/ScrantonHacks' > sponsors.sh",
            "Our Sponsors"]}
          gradientBg
          factor={3}
        >
          <SponsorList
            sponsors={this.state.landingContent.sponsors}
            partners={this.state.landingContent.partners}z
          />

          <Footer data={this.state.siteMetadata.social}/>
        </HackHero>
      </div>
    );
  }
}

export const query = graphql`
query IndexQuery {
  site {
    siteMetadata {
      sponsorEmail
      title
      description
      url
      social {
        name
        size
        link
      }
      landingContent {
        about
        questions {
            q
            a
        }
        motto {
          build
          connect
          learn
        }
        team {
          image
          name
          title
        }
        sponsors {
          logo
          tier
        }
        partners {
          logo
        }
      }
    }
  }
}
`;
