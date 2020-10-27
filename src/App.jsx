import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import FirstFilters from './components/FirstFilters';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.content}>
      <Header />
      <Switch>
        <Route path="/" component={FirstFilters} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
