import React from 'react';
import PlantCard from './PlantCard';

const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 25, image: 'photos/FiddleLeafFig.jpg' },
    { id: 2, name: 'Snake Plant', price: 20, image: 'photos/SnakePlant.jpg' },
    { id: 3, name: 'Monstera', price: 30, image: 'photos/Monstera.jpg' },
    { id: 4, name: 'Peace Lily', price: 15, image: 'photos/PeaceLily.jpg' },
    { id: 5, name: 'Spider Plant', price: 10, image: 'photos/SpiderPlant.jpg' },
    { id: 6, name: 'ZZ Plant', price: 35, image: 'photos/ZZPlant.jpg' },
];

const ProductListingPage = () => (
    <div className="product-listing">
        {products.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
        ))}
    </div>
);

export default ProductListingPage;