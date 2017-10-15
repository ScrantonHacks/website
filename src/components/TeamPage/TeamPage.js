import React from 'react';
import DeployIcon from 'grommet/components/icons/base/Deploy';
import SyncIcon from 'grommet/components/icons/base/Sync';
import TechnologyIcon from 'grommet/components/icons/base/Technology';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';

import TeamImage from '../TeamImage';

import styled from 'styled-components';

const TextContainer = styled.div`
width: 100%;
margin:auto;
color: #dddccc;
margin-top: 2em;
`;
const MemberName = styled.h2`
font-size: 2em !important;
`;
const MemberTitle = styled.h4`
font-size: 1.4em !important;
`;

const getTeam = (team) => {
  let key = 0;
  return team.map( (member) => {
    return (
      <Box align="center" pad="none" margin="none" direction="column" key={key}>
        <TextContainer>
          <TeamImage name={member.name}/>
          <MemberName>{member.name}</MemberName>
          <MemberTitle>{member.title}</MemberTitle>
        </TextContainer>
      </Box>
    );
  });
  key += 1;
}


export default ({team}) => {
  console.log(team);
  return (
    <Columns justify="center" responsive size='medium' >
      {getTeam(team)}
    </Columns>
  );
}
