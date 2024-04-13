import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App(props) {
  return (
    <>
      <Header/>
      <Navbar/>
      <Content/>
      <Footer/>

    </>
  );
}

export default App;