import React from 'react';
import SponsorImage from '../SponsorImage';
import Columns from 'grommet/components/Columns';

const getSponsors = (sponsorArray) => {
  return sponsorArray.map((sponsor)=>{
      key += 1;
      return (
          <Avatar src={sponsor.logo} />
      );
  });
}
export default ({sponsorArray}) => {
  return (
    <Columns justiy="center" responsive >
        {getSponsors(sponsorArray)}
    </Columns>
    );
}
