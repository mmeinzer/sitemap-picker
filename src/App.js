import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Index} />
      <Route exact path="/sign-up" component={SignUp} />
    </Router>
  );
}

export default App;
