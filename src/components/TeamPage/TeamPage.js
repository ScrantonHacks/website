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
const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: top;
`;
/**
 * @param {team} array
 * @param {amntProcAtOnce} integer
 * */
const getEntireTeam = (team, amntProcAtOnce) =>{
  let i = 0;
  let teamArray = new Array();
  while (i < team.length) {
    teamArray.push(
      <FlexDiv key={i}>
        {getTeam(team, amntProcAtOnce, i)}
      </FlexDiv>
    );
    i += amntProcAtOnce;
  };
  console.log("TEAM ARRAY");
  console.log(teamArray);
  return teamArray.reverse();
};

// returns the team, but only at specified amounts of time
// IE, return 4 Avatars at a time
// this is for responsiveness and Flex No Wrap
// this lets us avoid using media queries which can get out of hand, fast 
// TODO a filter function here would be neater :)
const getTeam = (team, amountAtATime, amountProc) => {
  let partOfTeam = new Array();
  for( let i = amountProc; i < team.length; i += 3) {
    partOfTeam = team.slice(amountProc, amountProc+3);
  }
  
  let key = 0;
  let result = partOfTeam.map( (member) => {
    key += 1;
    return (
      <Avatar name={member.name} img={__PATH_PREFIX__ + member.image} link="http://twitter.com" title={member.title} key={key}/>
    );
  });

  console.log("TEAM RESULT");
  console.log(result);
  return result;
}


export default ({team}) => {
  return (
    <div>
      {getEntireTeam(team, 3)}
    </div>
  );
}
