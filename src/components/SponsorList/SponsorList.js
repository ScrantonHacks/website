import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SponsorImage from '../SponsorImage';
import Columns from 'grommet/components/Columns';

const getSponsors = (sponsorArray, partnerArray, partners=false)=> {
  const sortedSponsors = _.sortBy(sponsorArray, [(o) => o.tier]);
  let key = 0;
  return sortedSponsors.map( sponsor => {
    key += 1;
    if(!sponsor.partner || !partners) {
      return <SponsorImage logo = {__PATH_PREFIX__ + sponsor.logo} tier = {sponsor.tier} key={key} /> 
    } else {
      partnerArray.push(sponsor);
    }
  });
}


const SponsorList = ({sponsors}) => {
  console.log(sponsors);
  let partners = new Array();
  return (
    <div>
      <Columns masonry maxCount={4} justify="center" responsive >
        <div>Sponsors</div>
        {getSponsors(sponsors, partners)}
      </Columns>
      <Columns masonry maxCount={4} justify="center" responsive>
        <div>Partners</div>
        {getSponsors(partners, true)}
      </Columns>
    </div>
  );
};

SponsorList.propTypes = {
  sponsorArray: PropTypes.array.isRequired
}

SponsorList.defaultProps = {
  sponsorArray: [{logo: 'default', tier: 1}],
}

export default SponsorList;
