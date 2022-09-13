import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Home from './pages/Home';
import Bottom from './components/Bottom';
import HomeComponent from './components/container/TestFile';
import OtherTest from './pages/OtherTest';

function App() {
  return (
    <div className="App">
      <Head />
      <Home />
      <Bottom />
      {/* <HomeComponent /> */}
      
    </div>
  );
}

export default App;
