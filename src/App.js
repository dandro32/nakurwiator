import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



class App extends Component {
  render() {
    const user = {
      email: 'user@random.pl'
    };

    return (
      <div className='containter-fluid'>
        <Header user={user} />
        <Footer />  
      </div>
    );
  }
}

export default App;
