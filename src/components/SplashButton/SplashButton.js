import React from 'react';
import Button from 'grommet/components/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 20.5em;
  margin-top: 2em;
  background-color: rgba(146, 58, 185, .85) !important;
  color: #000;
`;

export default (props) =>
  <StyledButton primary {...props} />
