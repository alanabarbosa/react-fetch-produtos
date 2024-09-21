import React from 'react';
import Header from '../src/components/Header.jsx';
import Home from '../src/components/Home.jsx';
import Footer from '../src/components/Footer.jsx';

const App = () => {
  return (
    <>
      <React.Fragment>
        <Header />
        <Home />
        <Footer />        
      </React.Fragment>      
    </>
  );
};

export default App;
