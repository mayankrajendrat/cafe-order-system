import React, { useState } from 'react';
import './DrinkOrder.css'; // For styling
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Define types for drink counts and prices
interface DrinkCounts {
    coffee: number;
    tea: number;
    milk: number;
    coke: number;
    beer: number;
}

const DrinkOrder: React.FC = () => {
    // Initialize state for counters and total price
    const [counts, setCounts] = useState<DrinkCounts>({
        coffee: 0,
        tea: 0,
        milk: 0,
        coke: 0,
        beer: 0
    });
    const [totalCount, setTotalCount] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    // Prices of the drinks
    const prices: { [key: string]: number } = {
        coffee: 480,
        tea: 280,
        milk: 180,
        coke: 190,
        beer: 580,
    };

    // Handler function to update the counters and total
    const handleOrder = (drink: keyof DrinkCounts): void => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [drink]: prevCounts[drink] + 1
        }));
        setTotalCount((prevTotalCount) => prevTotalCount + 1);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + prices[drink]);
    };

    // Handler function to clear the orders
    const handleClear = (): void => {
        setCounts({
            coffee: 0,
            tea: 0,
            milk: 0,
            coke: 0,
            beer: 0
        });
        setTotalCount(0);
        setTotalPrice(0);
    };

    return (
        <Card>
            <Card.Body className='menu-wrapper'>
                <div className='item-list'>
                    <Button id="coffee" className='menu-item' variant="light" onClick={() => handleOrder('coffee')}>
                        <span className='item-name left-align'>Coffee</span>
                        <span className='item-name right-align'>480 Yen</span>
                        <div id="coffee-count" className='item-quantity badge bg-danger'>{counts.coffee}</div>
                    </Button>

                    <Button id="tea" className='menu-item' variant="light" onClick={() => handleOrder('tea')}>
                        <span className='item-name left-align'>Tea</span>
                        <span className='item-name right-align'>280 Yen</span>
                        <div id="tea-count" className='item-quantity badge bg-danger'>{counts.tea}</div>
                    </Button>

                    <Button id="milk" className='menu-item' variant="light" onClick={() => handleOrder('milk')}>
                        <span className='item-name left-align'>Milk</span>
                        <span className='item-name right-align'>180 Yen</span>
                        <div id="milk-count" className='item-quantity badge bg-danger'>{counts.milk}</div>
                    </Button>

                    <Button id="coke" className='menu-item' variant="light" onClick={() => handleOrder('coke')}>
                        <span className='item-name left-align'>Coke</span>
                        <span className='item-name right-align'>190 Yen</span>
                        <div id="coke-count" className='item-quantity badge bg-danger'>{counts.coke}</div>
                    </Button>

                    <Button id="beer" className='menu-item' variant="light" onClick={() => handleOrder('beer')}>
                        <span className='item-name left-align'>Beer</span>
                        <span className='item-name right-align'>580 Yen</span>
                        <div id="beer-count" className='item-quantity badge bg-danger'>{counts.beer}</div>
                    </Button>
                </div>

                <div className='bill-wrapper'>
                    <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Header>Your Bill</Card.Header>
                        <Card.Body>
                            <Card.Title>Items Ordered: <span id="count">{totalCount}</span></Card.Title>
                            <Card.Text>
                                Total Price: <span id="price">{totalPrice}</span> Yen
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button variant="warning" onClick={handleClear}>Clear</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </Card.Body>
        </Card>
    );
};

export default DrinkOrder;
