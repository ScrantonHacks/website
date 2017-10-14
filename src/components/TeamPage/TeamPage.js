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

export default ({team}) =>

    <Columns justify="center" responsive size='medium'>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.andrew.name}/>
                <MemberName>{team.andrew.name}</MemberName>
                <MemberTitle>{team.andrew.title}</MemberTitle>
            </TextContainer>
        </Box>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.john.name}/>
                <MemberName>{team.john.name}</MemberName>
                <MemberTitle>{team.john.title}</MemberTitle>
            </TextContainer>
        </Box>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.regita.name}/>
                <MemberName>{team.regita.name}</MemberName>
                <MemberTitle>{team.regita.title}</MemberTitle>
            </TextContainer>
        </Box>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.peter.name}/>
                <MemberName>{team.peter.name}</MemberName>
                <MemberTitle>{team.peter.title}</MemberTitle>
            </TextContainer>
        </Box>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.clarence.name}/>
                <MemberName>{team.clarence.name}</MemberName>
                <MemberTitle>{team.clarence.title}</MemberTitle>
            </TextContainer>
        </Box>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.brian.name}/>
                <MemberName>{team.brian.name}</MemberName>
                <MemberTitle>{team.brian.title}</MemberTitle>
            </TextContainer>
        </Box>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.liam.name}/>
                <MemberName>{team.liam.name}</MemberName>
                <MemberTitle>{team.liam.title}</MemberTitle>
            </TextContainer>
        </Box>
        <Box align="center" pad="none" margin="none" direction="column">
            <TextContainer>
                <TeamImage name={team.sean.name}/>
                <MemberName>{team.sean.name}</MemberName>
                <MemberTitle>{team.sean.title}</MemberTitle>
            </TextContainer>
        </Box>
        </Columns>
        ;
