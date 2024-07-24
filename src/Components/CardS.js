import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import products from '../Data/products.json';

function Product() {
  const [groupedProducts, setGroupedProducts] = useState([]);

  useEffect(() => {
    // Group products into rows of 4
    const grouped = [];
    for (let i = 0; i < products.length; i += 4) {
      grouped.push(products.slice(i, i + 4));
    }
    setGroupedProducts(grouped);
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
            <Card key={index} className="mb-4 mx-4" style={{ width: '18rem', borderRadius: '15px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src={product.image} alt={product.name} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
              <Card.Body>
                <Card.Title style={cardTitleStyle}>{product.name}</Card.Title>
                <Card.Text style={cardTextStyle}>
                  {product.description}
                  <br />
                  <strong>{product.price}</strong>
                </Card.Text>
                <a href="#" className="btn btn-primary">Add to Cart</a>
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
