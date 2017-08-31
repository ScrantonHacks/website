import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import styled from 'styled-components';

import SocialShare from '../SocialShare';
import SplashButton from '../SplashButton';

const onSponsorClick = function(e) {
  e.preventDefault();
};

const Container = styled.div`
  text-align: center;
  color: #fff;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledText = styled.p`
  color: #fff !important;
  max-width: 100% !important;
`;

export default ({ data }) =>
  <Container>
    <SplashButton onClick={onSponsorClick} label='Become a Sponsor'/>
    <StyledText>Or email us at {data.sponsorEmail}</StyledText>
    <SocialShare data={data} />
  </Container>
;
