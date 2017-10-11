import React from 'react';
import DeployIcon from 'grommet/components/icons/base/Deploy';
import SyncIcon from 'grommet/components/icons/base/Sync';
import TechnologyIcon from 'grommet/components/icons/base/Technology';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';

import styled from 'styled-components';

const StyledDeploy = styled(DeployIcon)`
  stroke: #c3c3c3 !important;
  fill: #c3c3c3 !important;
`;

const StyledSync = styled(SyncIcon)`
  stroke: #c3c3c3 !important;
  fill: #c3c3c3 !important;
`;

const StyledTechnology = styled(TechnologyIcon)`
  stroke: #c3c3c3 !important;
  fill: #c3c3c3 !important;
`;

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

export default ({team}) =>
  <Columns justify="center" responsive size='medium'>
    <Box align="center" pad="none" margin="none" direction="column">
      <StyledDeploy size='large'/>
      <TextContainer>
        <MemberName>{team.andrew.name}</MemberName>
        <MemberTitle>{team.andrew.title}</MemberTitle>
      </TextContainer>
    </Box>
  </Columns>
;
