import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import ScrantonFlyoverVideo from '../videos/scranton-flyover.mp4';

import HackHero from '../components/HackHero';
import BackgroundParallaxVideo from '../components/BackgroundParallaxVideo';
import SubscribeSplash from '../components/SubscribeSplash';
import SponsorCrumb from '../components/SponsorCrumb';
import ScrantonHacksLogo from '../components/ScrantonHacksLogo';

export default class Index extends Component {
  constructor(props) {
    super(props);
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
              <SubscribeSplash data={this.props.data} />
              <SponsorCrumb data={this.props.data} />
            </div>
          </BackgroundParallaxVideo>
      	</HackHero>
        <HackHero chapter={1} title={[
          "echo '#! /bin/ScrantonHacks' > about.sh",
          "About Us"]}>
        </HackHero>
     </Box>
    )
  }
}

export const query = graphql`
  query ShareQuery {
    site {
      siteMetadata {
        sponsorEmail
        social {
          facebook_link
          twitter_link
          instagram_link
        }
      }
    }
  }
`;
