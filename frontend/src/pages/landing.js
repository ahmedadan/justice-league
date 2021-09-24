import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';;

export default
class landingPage extends React.Component {
    render() {
      return (
        <div>
          <button className="ind">I'm an individual</button>
          <button className="org">I'm an organization</button>
        </div>
      );
    }
  }