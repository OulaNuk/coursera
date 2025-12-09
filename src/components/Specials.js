import React from 'react';
import SpecialCard from './SpecialCard';
import './Specials.css';


const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$ 11.5",
    description: "A traditional dish made with cucumbers, tomatoes, onion, feta cheese, and Kalamata olives, seasoned with salt, oregano, and a drizzle of olive oil.",
    image: "../assest/greek salad.jpg" // يجب تغيير المسار
  },
  {
    id: 2,
    name: "Bruchetta",
    price: "$ 21.5",
    description: "A simple and delicious Italian appetizer consisting of grilled bread rubbed with garlic, drizzled with olive oil, and topped with fresh, diced tomatoes and herbs.",
    image: "../assest/bruchetta.svg" // يجب تغيير المسار
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$ 5.5",
    description: "A light, fluffy, and super moist lemon cake layered with zesty lemon curd and topped with a super delicious cream cheese frosting.",
    image: "../assest/lemon dessert.jpg" // يجب تغيير المسار
  }
];

function Specials() {
  return (
    <section className="specials-section">
     
      <div className="specials-header">
        <h1>This Weeks specials!</h1>
        <button className="online-menu-button">
          Online Menu
        </button>
      </div>
      <div className="specials-cards-container">
        {specialsData.map(dish => (
          <SpecialCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
}

export default Specials;