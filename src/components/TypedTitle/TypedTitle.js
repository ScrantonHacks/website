import React, { Component } from 'react';
import Typed from 'typed.js';
import Title from 'grommet/components/Title';

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
      <Title className='type-wrap' style={{ paddingLeft: '1em' }} responsive>
        <h1 style={{ whiteSpace: 'pre' }} ref={(el)=> {this.el = el}} />
      </Title>
    );
  }
}