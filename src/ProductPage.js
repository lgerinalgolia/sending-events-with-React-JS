import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import aa from 'search-insights';
import algoliasearch from 'algoliasearch/lite';

const ProductPage = () => {
  const indexName = 'demo_ecommerce';
  const client = algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5');
  const index = client.initIndex(indexName);
  const { productID, queryID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    index.search(productID).then(({ hits }) => setProduct(hits[0]));
  }, []);

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
              objectIDs: [productID],
              queryID: queryID,
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
