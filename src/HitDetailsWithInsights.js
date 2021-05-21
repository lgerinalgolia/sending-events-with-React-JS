/* global aa */

import { useLocation } from "react-router-dom";
import React from 'react';

const indexName = 'demo_ecommerce';

function HitDetails() {
  const location = useLocation()
  const { product } = location.state
    return (
        <div className="product-card">
          <img src={product.image} align="left" alt={product.name} />
          <div className="hit-info">
            <div className="hit-name">{product.name}</div>
            <div className="hit-description">{product.description}</div>
            <div className="hit-price">${product.price}</div>
            <button
              className="hit-action" onClick={() => {
                aa('convertedObjectIDsAfterSearch', {
                  index: indexName,
                  eventName: 'Product Added to Cart',
                  userToken: 'user-1',
                  objectIDs: [product.objectID],
                  queryID: product.__queryID,
                });
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
    );
  }

  export const HitDetailsWithInsights = (HitDetails)