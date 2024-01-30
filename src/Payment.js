import React, { useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { Link, Navigate } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = Navigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded,setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled,setDisabled] = useState(true);
  const [clientSecret,setClientSecret] = useState(true);

  useEffect(() => {
  //generate the special stripe secret ehich allow us to charge the customer
 const getClientSecret = async () => {
const response = await axios({
  method: 'post',
  // stripe expects the total in a curriences suunits
  url: `/payments/create?total= ${getBasketTotal(basket) * 100}`
});
setClientSecret(response.data.clientSecret)
 }
 getClientSecret();

  },[basket])


  const handlesubmit = async (event) =>{
//do all fancy stripe change
  event.preventDefault();
  setProcessing(true);

 const payload = await stripe.confirmCardPayment(clientSecret, {
  payment_method:{
    card: elements.getElement(CardElement)
  }
 }).then(({ paymentIntent}) => {
  //paymentIntent = payment confirmation

   setSucceeded(true);
   setError(null)
   setProcessing(false)

   navigate.replace('/orders')
 })

  }
  const handlechange = event =>{
//listen for changes in the CardElement
//and display any errors as the customer enter their card details
   setDisabled(event.empty);
   setError(event.error ? event.error.message:'');
  }

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>Checkout({<Link to='/checkout'>{basket?.length}items</Link>})</h1>

        {/*payment section - delivery address*/}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>

          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>227/1305,Gayatrinagar,Chandkheda</p>
            <p>Ahmedabad,Gujarat-382424</p>
          </div>
        </div>

        {/*payment section - item review */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review items and Delivery</h3>
          </div>

          <div className='payment_items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*payment section - payment method*/}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>

          <div className='payment_details'>
            {/*stripe magic*/}
            <form action='' onSubmit={handlesubmit}>
              <CardElement onChange={handlechange} />

              <div className='payment_priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                   <h3>order total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p>: 'Buy Now'}</span>
                </button>
              </div>

              {/*Errors*/}
              {error && <div>{error} </div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
