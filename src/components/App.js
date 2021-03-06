// import React from 'react';
// import logo from '../logo.svg';
// import '../styles/App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import React, { Component } from 'react';
// import { TopBar } from './TopBar';
// import { Main } from './Main';
import TopNavBar from './TopNavBar'
import Main  from './Main';
class App extends Component {
  render() {
    return (
        <div className="App">
          <TopNavBar />
          <Main />
        </div>
    );
  }
}

export default App;
