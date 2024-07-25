import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import About from './pages/About';
import Portfolio from './pages/Portfolio'; 

function App() {
  return (
    <main>
      <Header />
      <Footer />
      <Project />
      <About />
      <Portfolio />
    </main>
  );
};
export default App;

