import React from 'react';
import {
  Configure,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
  } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { ProductCard } from './ProductCard';

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

const Search = () => {
  return (
    <div className="ais-InstantSearch">
      <h1>How to send events with React InstantSearch</h1>
      <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
        <Configure clickAnalytics />
        <div className="left-panel">
          <h2>Brands</h2>
          <RefinementList attribute="brand" />
        </div>
        <div className="right-panel">
          <SearchBox translations={{placeholder: 'Search for brands, products...'}}/>
          <Hits hitComponent={ProductCard} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  )
};

export default Search;
