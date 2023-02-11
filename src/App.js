import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import NewsList from './components/News/NewsList';
import ReviewItem from './components/ReviewItem/ReviewItem';
import ReviewList from './components/ReviewList/ReviewList';
// import Btn from './components/Btn/Btn';

function App() {
  return (
    <div>
      <Form/>
      <NewsList/>
      {/* <Btn /> */}
      <ReviewList />
    </div>
  );
}

export default App;
