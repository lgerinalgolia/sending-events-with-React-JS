import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  Configure,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-dom';
import './App.css';
import { HitWithInsights } from './HitWithInsights';
import { HitDetailsWithInsights } from './HitDetailsWithInsights';
import { Switch, Route} from "react-router-dom";


const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

window.aa('setUserToken', 'user-1');

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/products/:productID">
            <HitDetailsWithInsights/>
          </Route>
          <Route path="/">
            <div className="ais-InstantSearch">
              <h1>How to send events with React InstantSearch</h1>
              <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
                <div className="left-panel">
                  <h2>Brands</h2>
                  <RefinementList attribute="brand" />
                  <Configure clickAnalytics />
                </div>
                <div className="right-panel">
                  <SearchBox translations={{placeholder: 'Search for brands, products...'}}/>
                  <Hits hitComponent={HitWithInsights} />
                  <Pagination />
                </div>
              </InstantSearch>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
