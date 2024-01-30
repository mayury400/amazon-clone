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
            <Route path='/Login' element={[<Login/>]} />
            <Route path='/Payment' element={[<Payment/>]} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
