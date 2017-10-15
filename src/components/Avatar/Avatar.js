import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.a`
  position: relative;
  width: 55%;
  &:hover ${Overlay} & {
    opacity: 1; 
  }
`;

const Image = styled.img`
  transition: background-color .5s;
  width: 100%;
  height: auto;
  display: block;
  text-align: center;
  text-transform: uppercase;
  border-radius: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgb(108, 60, 109);
  border-radius: 100%;
  ${AvatarContainer}: hover & {
    opacity: .85;
  }
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
  </AvatarContainer>;

Avatar.propTypes = 
{
    link: React.PropTypes.string, 
    img: React.PropTypes.string, 
    name: React.PropTypes.string,
};

Avatar.defaultProps = 
{
    link: __PATH_PREFIX__ + "/",
    img: '',
    name: '',
};

export default Avatar;
