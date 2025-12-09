import React from "react";
import { Link } from 'react-router-dom';
import './HomePage.css'
import HeroImage from "../assest/restauranfood.jpg"
import FoundersImage from "../assest/restaurant chef B.jpg"
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function HomePage(props) {
  return (
    <>

      <section className="hero-section">

        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a restaurant maneged by a family Foucesed on a modern recepy .
          </p>
          <Link
            to="/reservations" 
            className="cta-button" 
          >
            Reserve a table
          </Link>
        </div>
        <div className="hero-image-container">
          <img src={HeroImage} alt="Food" className="hero-image" />
        </div>
      </section>
      <Specials />
      <Testimonials />
      <section className="chicago-section">

        <div className="chicago-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming family-owned Mediterranean restaurant, rooted in the heart of Chicago. Founded by two siblings, Mario and Adrian, the restaurant is a culmination of their passion for traditional recipes and modern culinary techniques.
          </p>
          <p>
            We focus on using fresh, locally-sourced ingredients to deliver authentic flavors from the Mediterranean region. Our cozy, rustic atmosphere ensures a warm and memorable dining experience for every guest.
          </p>
        </div>

        <div className="chicago-image-container">
          <img src={FoundersImage} alt="Mario and Adrian, Little Lemon founders" className="chicago-image" />
        </div>
      </section>

    </>
  )
}

export default HomePage;