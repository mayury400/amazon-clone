import React  from 'react';
import './App.css';
import './App';
import Header from './Header';
import {BrowserRouter as Router,Routes,Route,BrowserRouter,} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51OeC6KSD7X1X759hjtr438DbdrTBF5dUPhzDBFveBJqLd6DvnrCuXYm5qsZXJYWHfgQ4qYH66ohTmHRglssOJV0C00COpdyI5X'
);

function App() {
const [{},dispatch] = useStateValue();


  useEffect(()=>{
auth.onAuthStateChanged(authUser => {
  console.log('THE USER Is>>>>', authUser);

  if(authUser) {
     dispatch({
      type:'SET_USER',
      user: authUser
     })
  }
  else{
     dispatch({
      type:'SET_USER',
      user: null
     })
  }
})
  }, [])
  return (
    <>
      <Router>
        <div className='app'>
          <Header />

          <Routes>
            <Route path='/' element={[<Home />]} />
            <Route path='/Checkout' element={[<Checkout />]} />
            <Route path='/Login' element={[<Login />]} />
            <Route
              path='/Payment'
              element={[
                <Elements stripe={promise}>
                  <Payment />
                </Elements>,
              ]}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
