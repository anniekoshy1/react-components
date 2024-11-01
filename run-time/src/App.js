import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Goals from './components/Goals';
import GearList from './components/GearList';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  const gearData = [
    {
      "_id": 1,
      "name": "Lululemon Speed Up Short 4\"",
      "img_name": "./assets/images/lululemon-shorts.jpg",
      "brand": "Lululemon",
      "price": "$68",
      "rating": 4.9,
      "features": ["Quick-drying fabric", "Breathable mesh liner", "Back pocket for essentials"]
    },
    {
      "_id": 2,
      "name": "Men's Running Shorts",
      "img_name": "./assets/images/mens-running-shorts.jpg",
      "brand": "Nike",
      "price": "$40",
      "rating": 4.7,
      "features": ["Lightweight and breathable", "Elastic waistband with drawstring", "Moisture-wicking technology"]
    },
    {
      "_id": 3,
      "name": "Women's Running Tank Top",
      "img_name": "./assets/images/womens-tank-top.jpg",
      "brand": "Adidas",
      "price": "$30",
      "rating": 4.8,
      "features": ["Sweat-wicking fabric", "Slim fit design", "Reflective details for visibility"]
    },
    {
      "_id": 4,
      "name": "On Men's Focus Tank",
      "img_name": "./assets/images/on-focus-tank.jpg",
      "brand": "On Running",
      "price": "$60",
      "rating": 4.6,
      "features": ["Ultra-lightweight design", "Seamless construction for comfort", "Moisture-control fabric"]
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Goals />
      <section className="gear-section">
        <h2>Recommended Gear & Equipment</h2>
        <GearList data={gearData} />
      </section>
      <Footer />
    </div>
  );
};

export default App;