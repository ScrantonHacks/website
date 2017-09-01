import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import ScrantonFlyoverVideo from '../videos/scranton-flyover.mp4';
import HackHero from '../components/HackHero';
import BackgroundParallaxVideo from '../components/BackgroundParallaxVideo';
import SubscribeSplash from '../components/SubscribeSplash';
import SponsorCrumb from '../components/SponsorCrumb';
import ScrantonHacksLogo from '../components/ScrantonHacksLogo';
import ThreeIconsMotto from '../components/ThreeIconsMotto';

import styled from 'styled-components';


const StyledHack = styled(HackHero)`
  padding-top: 3px;
`;

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
      	<HackHero chapter={0}>
          <BackgroundParallaxVideo 
            videoSource = {ScrantonFlyoverVideo}
            startTime = {12}
          >
            <div className="text-center text-white">
              <ScrantonHacksLogo />
              <SubscribeSplash title={this.state.siteMetadata.title} />
              <SponsorCrumb data={this.state.siteMetadata} />
            </div>
          </BackgroundParallaxVideo>
      	</HackHero>
        <StyledHack chapter={1} title={[
          "echo '#! /bin/ScrantonHacks' > about.sh",
          "About Us"]} gradientBg>
          <TextContainer>
            <h3 style={{textAlign: 'center'}}>{this.state.landingContent.about}</h3>
          </TextContainer>
          <ThreeIconsMotto motto={this.state.landingContent.motto} />
        </StyledHack>
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
