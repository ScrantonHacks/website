import React from 'react';
import DeployIcon from 'grommet/components/icons/base/Deploy';
import SyncIcon from 'grommet/components/icons/base/Sync';
import TechnologyIcon from 'grommet/components/icons/base/Technology';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import styled from 'styled-components';

import Avatar from '../Avatar';

const TextContainer = styled.div`
width: 100%;
color: #dddccc;
margin-top: 2.5em;
`;

const getTeam = (team) => {
  let key = 0;
  return team.map( (member) => {
    key += 1;
    return (
      <Box align="center" pad="none" margin={{right:"none", left: "none", bottom: "large"}} direction="column" key={key} responsive focusable>
        <Avatar name={member.name} img={__PATH_PREFIX__ + member.image} link="http://twitter.com" title={member.title} />
      </Box>
    );
  });
}


export default ({team}) => {
  return (
    <Columns justify="center" responsive >
      {getTeam(team)}
    </Columns>
  );
}
