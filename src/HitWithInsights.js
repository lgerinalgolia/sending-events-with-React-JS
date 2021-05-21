import { connectHitInsights, Highlight } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";


function Hit({ hit, insights }) {
  return (
    <Link to={{
      pathname: `/products/${hit.objectID}`,
      state: { product: hit }
    }} onClick={() => {
      insights('clickedObjectIDsAfterSearch', {
        eventName: 'Clicked on product',
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

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
  insights: PropTypes.func.isRequired,
};

export const HitWithInsights = connectHitInsights(window.aa)(Hit);
