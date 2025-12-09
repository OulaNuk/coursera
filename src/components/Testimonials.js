import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

// البيانات الوهمية (Mock Data)
const reviewsData = [
  {
    id: 1,
    rating: 5,
    name: "Amelia H.",
    review: "The Greek Salad here is unmatched! Fresh ingredients and perfect seasoning.",
    image: "../assest/co1.avif" 
  },
  {
    id: 2,
    rating: 4,
    name: "Marcus T.",
    review: "Great spot for family dinner. The Lemon Dessert was the highlight of our night.",
    image:  "../assest/co2.avif" 
  },
  {
    id: 3,
    rating: 5,
    name: "Sophia C.",
    review: "Wonderful service and authentic atmosphere. Highly recommend the Bruschetta.",
    image:  "../assest/co3.avif" 
  },
  {
    id: 4,
    rating: 4,
    name: "Ben K.",
    review: "Quick seating and the staff were very friendly. Will definitely be coming back!",
    image:  "../assest/co4.avif" 
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h1 className="testimonials-title">Testimonials</h1>
      
      {/* حاوية البطاقات (سيتم تطبيق Grid عليها) */}
      <div className="reviews-container">
        {reviewsData.map(review => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;