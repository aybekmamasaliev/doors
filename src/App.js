import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import NewsList from './components/News/NewsList';
import OurServices from './components/OurServices/OurServices';
import ReviewItem from './components/ReviewItem/ReviewItem';
import ReviewList from './components/ReviewList/ReviewList';
// import Btn from './components/Btn/Btn';

function App() {
  return (
    <div>
      <Form/>
      <OurServices />
      <NewsList/>
      {/* <Btn /> */}
      <ReviewList />
    </div>
  );
}

export default App;
