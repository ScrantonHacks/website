import React, { Component } from 'react';
import Typed from 'typed.js';
import Title from 'grommet/components/Title';

import styled from 'styled-components';

const TextContainer = styled(Title)`
  margin: auto;
  color: #ddd;
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  text-align: center;
`;

export default class TypedTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { strings } = this.props;
    // You can pass other options here, such as type speed, back speed, etc
    const options = {
      strings,
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      showCursor: false
    };

    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <TextContainer responsive>
        <h1 
          ref={(el)=> {this.el = el}} 
          style=
            {{
              width: '100%',
              margin: 'auto',
              textAlign: 'center',
              whiteSpace: 'pre'
            }}
        />
      </TextContainer>
    );
  }
}