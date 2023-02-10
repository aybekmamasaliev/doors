import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import ReviewItem from './components/ReviewItem/ReviewItem';
import Reviews from './components/ReviewList/ReviewList';

function App() {
  return (
    <div>
      <Form/>
      <Reviews />
      <ReviewItem />
    </div>
  );
}

export default App;
