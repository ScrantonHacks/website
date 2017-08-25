import React, { Component } from 'react';
import Typed from 'typed.js';

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
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true
    };

    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className='type-wrap'>
        <h1 style={{ whiteSpace: 'pre' }} ref={(el)=> {this.el = el}} />
      </div>
    );
  }
}