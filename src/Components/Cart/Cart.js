import React from 'react';
import './Cart.css'

const Cart = (cart) => {
    return (
        <div>
             <div className='sticky top-6 mt-6 text-center'> 
                        <h4>Order Summury</h4>
                        <h5> Selected Items :{cart.length}</h5>
                  </div>
        </div>
    );
};

export default Cart;