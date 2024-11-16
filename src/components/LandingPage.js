import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>Houseplant Haven</h1>
                <h3>Welcome to Houseplant Haven, your ultimate destination for bringing the beauty of nature into your home. We specialize in offering a carefully curated selection of houseplants that enhance your living spaces, purify the air, and create a serene atmosphere. Whether you’re a seasoned plant parent or just starting your journey, we’re here to provide the perfect greenery to brighten your day and your home. Let us help you grow a little closer to nature!</h3>
            </header>
            <div className="plant-card-preview">
                <header className="header-center">
                    <h1>Plant Cart Preview</h1>
                </header>
                <main className="card-container">
                    <div className="card">
                        <img src="photos/FiddleLeafFig.jpg" alt="Fiddle Leaf Fig" className="plant-image" />
                        <h2>Fiddle Leaf Fig</h2>
                        <p>Elegant, large leaves, trendy centerpiece</p>
                    </div>
                    <div className="card">
                        <img src="photos/SnakePlant.jpg" alt="Snake Plant" className="plant-image" />
                        <h2>Snake Plant</h2>
                        <p>Hardy, air-purifying, low-maintenance</p>
                    </div>
                    <div className="card">
                        <img src="photos/Monstera.jpg" alt="Monstera" className="plant-image" />
                        <h2>Monstera</h2>
                        <p>Tropical, iconic split-leaves, vibrant</p>
                    </div>
                    <div className="card">
                        <img src="photos/PeaceLily.jpg" alt="Peace Lily" className="plant-image" />
                        <h2>Peace Lily</h2>
                        <p>Graceful, white flowers, air-cleansing</p>
                    </div>
                    <div className="card">
                        <img src="photos/SpiderPlant.jpg" alt="Spider Plant" className="plant-image" />
                        <h2>Spider Plant</h2>
                        <p>Classic, adaptable, cascading green foliage</p>
                    </div>
                    <div className="card">
                        <img src="photos/ZZPlant.jpg" alt="ZZ Plant" className="plant-image" />
                        <h2>ZZ Plant</h2>
                        <p>Resilient, glossy leaves, drought-tolerant</p>
                    </div>
                </main>
                <Link to="/products">
                    <button className="get-started-button">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;