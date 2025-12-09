import React from 'react';
import './TestimonialCard.css';
import StarIcon  from  "../assest/star.png"

function TestimonialCard(props) {
  // توليد أيقونات النجوم بناءً على التقييم
  const stars = Array(props.review.rating).fill(0).map((_, i) => (
    <img key={i} src={StarIcon} alt="Star" className="star-icon" />
  ));
  
  return (
    <article className="testimonial-card">
      {/* 1. التقييم */}
      <div className="card-rating">
        {stars}
      </div>
      
      <div className="reviewer-info">
        {/* 2. صورة العميل */}
        <img src={props.review.image} alt={props.review.name} className="reviewer-image" />
        {/* 3. اسم العميل */}
        <p className="reviewer-name">{props.review.name}</p>
      </div>
      
      {/* 4. نص المراجعة */}
      <p className="reviewer-review-text">{props.review.review}</p>
    </article>
  );
}

export default TestimonialCard;