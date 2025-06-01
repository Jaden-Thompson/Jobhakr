import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CyberpunkScene from './components/CyberpunkScene';
import LandingContent from './components/LandingContent';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <CyberpunkScene />
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingContent} />
          {/* Additional routes can be added here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;