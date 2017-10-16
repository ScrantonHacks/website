import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import SponsorImage from '../SponsorImage';
import Columns from 'grommet/components/Columns';

const TextContainer = styled.div.attrs({
  mBottom: props => props.mBottom || '1em',
})`
  width: 100%;
  margin:auto;
  margin-bottom: ${props => props.mBottom};
  color: #dddccc;
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.size};
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
      <Columns masonry maxCount={4} justify="between" responsive >
        {getSponsors(sponsors)}
      </Columns>
      <TextContainer size="2em">Partners</TextContainer>
      <Columns masonry maxCount={4} justify="center" responsive >
        {getPartners(partners)}
      </Columns>
      <TextContainer size="1em" mBottom="0em">Looking to Sponsor ScrantonHacks?</TextContainer>
      <TextContainer size="1em">Click Here or email sponsorship@scrantonhacks.com</TextContainer>
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
