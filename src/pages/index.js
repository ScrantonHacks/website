import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import HackHero from '../components/HackHero';
import BackgroundParallaxVideo from '../components/BackgroundParallaxVideo';
import SubscribeSplash from '../components/SubscribeSplash';
import SponsorCrumb from '../components/SponsorCrumb';
import ScrantonHacksLogo from '../components/ScrantonHacksLogo';
import ThreeIconsMotto from '../components/ThreeIconsMotto';
import Parallax from 'react-springy-parallax';

import styled from 'styled-components';

const TextContainer = styled.div`
  width: 45%;
  margin:auto;
  color: #ddd;
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
    <Box direction='column' margin='none' pad='none'>
      <Parallax ref='parallax' pages={2}>
      	<HackHero offset={0} scrantonVideo>
          <div className="text-center text-white">
            <ScrantonHacksLogo />
            <SubscribeSplash title={this.state.siteMetadata.title} />
            <SponsorCrumb data={this.state.siteMetadata} />
          </div>
      	</HackHero>
        <HackHero offset={1} title={[
          "echo '#! /bin/ScrantonHacks' > about.sh",
          "About Us"]} gradientBg>
          <TextContainer>
            <h3>{this.state.landingContent.about}</h3>
          </TextContainer>
          <ThreeIconsMotto motto={this.state.landingContent.motto} />
        </HackHero>
      </Parallax>
     </Box>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        sponsorEmail
        title
        social {
          facebook_link
          twitter_link
          instagram_link
        }
        landingContent {
          about
          motto {
            build
            connect
            learn
          }
        }
      }
    }
  }
`;
