import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import SponsorImage from '../SponsorImage';
import Columns from 'grommet/components/Columns';

const TextContainer = styled.h2`
  width: 100%;
  margin:auto;
  color: #dddccc;
  margin-bottom: 2em;
  text-align: center;
  font-weight: 1000;
`;

const getSponsors = sponsorArray => {
  const sortedSponsors = _.sortBy(sponsorArray, [(o) => o.tier]);
  let key = 0;
  return sortedSponsors.map( sponsor => {
    key += 1;
    return <SponsorImage logo = {__PATH_PREFIX__ + sponsor.logo} tier = {sponsor.tier} key={key} /> 
  });
}

const getPartners = partnerArray => {
  let key = 0;
  return partnerArray.map( partner => {
    key +=1;
    return <SponsorImage logo={__PATH_PREFIX__ + partner.logo } key={key} />
  });
}

const SponsorList = ({sponsors, partners}) => {
  return (
    <div>
      <TextContainer>Sponsors</TextContainer>
      <Columns masonry maxCount={4} justify="center" responsive >
        {getSponsors(sponsors, partners)}
      </Columns>
      <TextContainer>Partners</TextContainer>
      <Columns masonry maxCount={4} justify="center" responsive >
        {getPartners(partners)}
      </Columns>
    </div>
  );
};

SponsorList.propTypes = {
  sponsors: PropTypes.array.isRequired,
  partners: PropTypes.array.isRequired,
}

SponsorList.defaultProps = {
  sponsors: [{logo: 'default', tier: 1}],
  partners: [{logo: 'default'}],
}

export default SponsorList;
