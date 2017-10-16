import React from 'react';

import Columns from 'grommet/components/Columns';

import styled from 'styled-components';

const TextContainer = styled.div`
width: 100%;
color: #dddccc;
margin-top: 2.5em;
`;

const H3 = styled.h3`
font-size: 2em;
`;

const H2 = styled.h2`
font-size: 2em;
`;

const getQuestions = (questionList) => {
  let key = 0;
  return questionList.map( (question) => {
    key += 1;
    return (
        <TextContainer key={key}>
        <H2>{question.q}</H2>
        <H3>{question.a}</H3>
        </TextContainer>
    );
  });
}


export default ({questionList}) => {
  return (
    <Columns justify="center" responsive maxCount={2}>
      {getQuestions(questionList)}
    </Columns>
  );
}
