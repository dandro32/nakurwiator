import React, { Component } from 'react';
import './App.css';
import Header from './components/UI/header/Header';
import Footer from './components/UI/footer/Footer';
import Main from './components/Main';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    const user = {
      email: 'user@random.pl'
    };

    

    return (
      <Router>
        <div className='containter-fluid'>
          <Header user={user} />
          <Main></Main>
          <Footer />  
        </div>
      </Router>
    );
  }
}

export default App;
