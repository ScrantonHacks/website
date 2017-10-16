import React from 'react';
import styled from 'styled-components';
import FooterContainer from 'grommet/components/Footer';

import SocialShare from '../SocialShare';

const StyledFooterContainer = styled(FooterContainer)`
  position: relative;
  background-color: rgba(1, 109, 4, .95);
  margin-top: 38em;
`;

const TextContainer = styled.div`
  width: 45%;
  margin:auto;
  color: #ddd;
`;
const StyledIcon = styled.a`
  margin: 2em;
  color: #fff !important;
`;

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 1em;
  margin: auto;
  width: 100%;
  padding-top: 1em;
`;

export default ({data}) => {
  console.log("FOOTER");
  console.log(data);
  return (
  <StyledFooterContainer justify="between" size="medium">
    <StyledDiv>
      <SocialShare social={data}/>
      <TextContainer>
        <h4>Made with  &#9829;  in Scranton.</h4>
      </TextContainer>
    </StyledDiv>
  </StyledFooterContainer>
  );
}

