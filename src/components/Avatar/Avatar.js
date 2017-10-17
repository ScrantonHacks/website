import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from 'grommet/components/Box';

const AvatarContainer = styled.a`
  display: flex;
  margin-left: 1em;
  margin-right: 1em;
  position: relative;
  &:hover ${Overlay} & {
    opacity: 1; 
  }
  max-height: 220px;
  max-width: 220px;
  min-height: 100px;
  min-width: 100px;

  @media (max-height)
`;

const Image = styled.img`
  transition: background-color .5s;
  display: inline-flex;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50%;
  padding: 1%;
  height: auto;
  width: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: rgb(108, 60, 109);
  border-radius: 100%;
  ${AvatarContainer}: hover & {
    opacity: .85;
  }
  padding: 1%;  // should same as Image padding
  height: auto;
  width: auto;
`;

const Name = styled.div`
  font-size: 1.3em;

  font-weight: 700;
  color: white;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const H5 = styled.h5`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const Avatar = ({link, img, name, title}) =>
  <AvatarContainer href={link}>
    <Image img={img} src={img} alt={name}/>
    <Overlay>
      <Name>{name}</Name>
      <H5>{title}</H5>
    </Overlay>
  </AvatarContainer>
  ;


Avatar.propTypes = 
{
    link: PropTypes.string, 
    img: PropTypes.string, 
    name: PropTypes.string,
};

Avatar.defaultProps = 
{
    link: __PATH_PREFIX__ + "/",
    img: '',
    name: '',
};

export default Avatar;
