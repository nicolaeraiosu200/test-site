import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import './styles/tailwind.css';
import './styles/theme.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-post" component={CreatePost} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;