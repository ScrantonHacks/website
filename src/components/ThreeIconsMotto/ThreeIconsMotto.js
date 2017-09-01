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

export default ({motto}) =>
  <Columns justify="center">
    <Box align="center" pad="none" margin="small" direction="column">
      <StyledDeploy size='xlarge'/>
      <TextContainer>
        <h2>Build</h2>
        <h3>{motto.build}</h3>
      </TextContainer>
    </Box>

    <Box align="center" pad="none" margin="small" direction="column">
      <StyledSync size='xlarge' />
      <TextContainer>
        <h2>Connect</h2>
        <h3>{motto.connect}</h3>
      </TextContainer>
    </Box>

    <Box align="center" pad="none" margin="small" direction="column">
      <StyledTechnology size='xlarge' />
      <TextContainer>
        <h2>Learn</h2>
        <h3>{motto.learn}</h3>
      </TextContainer>
    </Box>
  </Columns>
;
