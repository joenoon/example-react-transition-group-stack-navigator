import React from "react";
import ReactDOM from "react-dom";

import {TestStackNav} from './TestStackNav';

class App extends React.Component {
  render() {
    return <div><TestStackNav /></div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
