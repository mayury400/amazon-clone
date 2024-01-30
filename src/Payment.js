import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

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

            <div className='payment_deatils'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
