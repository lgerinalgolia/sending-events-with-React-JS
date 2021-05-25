import React, { Component } from 'react';
import './App.css';
import { Search } from './Search';
import { ProductDetails } from './ProductDetails';
import { Switch, Route} from "react-router-dom";

window.aa('setUserToken', 'user-1');

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/products/:productID">
            <ProductDetails/>
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
