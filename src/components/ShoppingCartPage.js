import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.items.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => dispatch(incrementItem({ id: item.id }))}>+</button>
                    <button onClick={() => dispatch(decrementItem({ id: item.id }))}>-</button>
                    <button onClick={() => dispatch(deleteItem({ id: item.id }))}>Delete</button>
                </div>
            ))}
            <p>Total Items: {cart.totalQuantity}</p>
            <p>Total Cost: ${cart.totalCost.toFixed(2)}</p>
            <button>Checkout (Coming Soon)</button>
            <Link to="/products">
                <button>Continue Shopping</button>
            </Link>
        </div>
    );
};

export default ShoppingCartPage;
