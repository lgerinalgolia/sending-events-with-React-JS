import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import ProductDetails from './ProductDetails';
import { Switch, Route} from 'react-router-dom';
import aa from 'search-insights';

aa('init', {
  appId: 'B1G2GM9NG0',
  apiKey: 'aadef574be1f9252bb48d4ea09b5cfe5'
});

aa('setUserToken', 'user-1');

const App = () => {
  return (
    <Switch>
      <Route path="/products/:productID/:queryID">
        <ProductDetails/>
      </Route>
      <Route path="/">
        <Search />
      </Route>
    </Switch>
  );
};

export default App;
