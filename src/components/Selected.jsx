import React from 'react';
import './Filmchoice.css';

class Selected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <result className="resultat">
        <img alt="filmcover" className="mini" />
        <h3 className="titre">Rambo</h3>
      </result>
    );
  }
}

export default Selected;
