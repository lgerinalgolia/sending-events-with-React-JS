import { connectHitInsights, Highlight } from 'react-instantsearch-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import aa from 'search-insights';

function Product({ hit, insights }) {
  return (
    <Link to={{
      pathname: `/products/${hit.objectID}/${hit.__queryID}`
    }} onClick={() => {
      insights('clickedObjectIDsAfterSearch', {
        eventName: 'Search Result Clicked',
      });
    }}>
      <div className="hit-card">
        <img src={hit.image} align="left" alt={hit.name} />
        <div className="hit-info">
          <div className="hit-name">
            <Highlight attribute="name" hit={hit} />
          </div>
          <div className="hit-description">
            <Highlight attribute="brand" hit={hit} />
          </div>
          <div className="hit-price">${hit.price}</div>
        </div>
      </div>
    </Link>
  );
}

export const ProductCard = connectHitInsights(aa)(Product);
