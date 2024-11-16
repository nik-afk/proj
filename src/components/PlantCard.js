// components/PlantCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
    const dispatch = useDispatch();
    const isInCart = useSelector(state =>
        state.cart.items.some(item => item.id === plant.id)
    );

    const handleAddToCart = () => {
        dispatch(addItem(plant));
    };

    return (
        <div className="plant-card">
            <img src={`${process.env.PUBLIC_URL}/${plant.image}`} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={handleAddToCart} disabled={isInCart}>
                {isInCart ? 'In Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default PlantCard;