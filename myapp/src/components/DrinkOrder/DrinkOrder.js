import React, { useState } from 'react';
import './DrinkOrder.css'; // For styling
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const DrinkOrder = () => {


    return (
        <Card>
        <Card.Body className='menu-wrapper'>

          <div className='item-list'>
            <Button className='menu-item' variant="light">
              <span className='item-name left-align'>Coffee</span>
              <span className='item-name right-align'>480 Yen</span>
              <Badge className='item-quantity' bg="danger">0</Badge>
            </Button>

            <Button className='menu-item' variant="light">
              <span className='item-name left-align'>Tea</span>
              <span className='item-name right-align'>280 Yen</span>
              <Badge className='item-quantity' bg="danger">0</Badge>
            </Button>


            <Button className='menu-item' variant="light">
              <span className='item-name left-align'>Milk</span>
              <span className='item-name right-align'>180 Yen</span>
              <Badge className='item-quantity' bg="danger">0</Badge>
            </Button>


            <Button className='menu-item' variant="light">
              <span className='item-name left-align'>Coke</span>
              <span className='item-name right-align'>190 Yen</span>
              <Badge className='item-quantity' bg="danger">0</Badge>
            </Button>


            <Button className='menu-item' variant="light">
              <span className='item-name left-align'>Beer</span>
              <span className='item-name right-align'>580 Yen</span>
              <Badge className='item-quantity' bg="danger">0</Badge>
            </Button>

          </div>

          <div className='bill-wrapper'>
            <Card style={{ width: '18rem' }} className="text-center">
              <Card.Header>Your Bill</Card.Header>
              <Card.Body>
                <Card.Title>Items Ordered: 0</Card.Title>
                <Card.Text>
                 Total Price: 0
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
              <Button variant="warning">Clear</Button>

              </Card.Footer>
            </Card>
          </div>

        </Card.Body>
      </Card>
    );
};

export default DrinkOrder;