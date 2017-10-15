import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SponsorImage from '../SponsorImage';
import Columns from 'grommet/components/Columns';

const getSponsors = sponsorArray => {
  let key = 0;
  return sponsorArray.map( sponsor => {
    key += 1;
    return <SponsorImage logo = {__PATH_PREFIX__ + sponsor.logo} tier = {sponsor.tier} key={key} /> 
  });
}


const SponsorList = ({sponsors}) => {
  console.log(sponsors);
  return (
    <div>
      {getSponsors(sponsors)}
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
