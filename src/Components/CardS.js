import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import products from '../Components/products.json';


function Product() {
  const [groupedProducts, setGroupedProducts] = useState([]);

  useEffect(() => {
    // Group products (for illustration purpose, we are not grouping here)
    setGroupedProducts([products]);
  }, []);

  const cardTextStyle = {
    fontSize: '18px',
  };

  const cardTitleStyle = {
    fontSize: '20px',
  };

  return (
    <div className="mx-5">
      {groupedProducts.map((group, groupIndex) => (
        <CardGroup key={groupIndex} className="mb-5">
          {group.map((product, index) => (
            <Card key={index} className="mb-4 mx-4" style={{ borderRadius: '15px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src={product.image} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
              <Card.Body>
                <Card.Title style={cardTitleStyle}>{product.price}</Card.Title>
                <Card.Text style={cardTextStyle}>
                  {product.name}<br />
                  {product.description}
                </Card.Text>
                <button onClick={() => {}}>Add to Cart</button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted" style={{ fontSize: '12px' }}>{product.lastUpdated}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      ))}
    </div>
  );
}

export default Product;
