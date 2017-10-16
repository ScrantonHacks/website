import React from 'react';
import FontAwesome from 'react-fontawesome';
import SocialShare from '../SocialShare';
import styled from 'styled-components';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';

const TextContainer = styled.div`
  width: 45%;
  margin:auto;
  color: #ddd;
`;
const StyledIcon = styled.a`
	margin: 2em;
`;

const StyledDiv = styled.div`
	margin-top: 10em;
`;

export default ({ data }) => {
  return (
  	<StyledDiv>
  		<StyledIcon href = "https://www.instagram.com/scrantonhacks497/?hl=en"><SocialInstagramIcon size="medium" /></StyledIcon>
  		<StyledIcon href = "https://www.instagram.com/scrantonhacks497/?hl=en"><SocialFacebookIcon size="medium" /></StyledIcon>
  		<StyledIcon href = "https://www.instagram.com/scrantonhacks497/?hl=en"><SocialTwitterIcon size="medium" /></StyledIcon>
  		<TextContainer>
  			<h4>Made with  &#9829;  from Scranton.</h4>
  		</TextContainer>
  	</StyledDiv>
  );
}

