import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
     let total = 0
     let totalShipping = 0
     for (const p of cart){
        total += p.price
        totalShipping += p.shipping
     } 
     
    return (
        <div>
             <div className='sticky top-6 mt-6 flex flex-col gap-y-3'> 
                        <h4 className='mb-4'>Order Summury</h4>
                        <p> Selected Items :{cart.length}</p>
                        <p>Total Price: {total}</p>
                        <p>Total shiping price:{totalShipping} </p>
                        <p>Tax:</p>
                        <h5>Grand Total:</h5>
                  </div>
        </div>
    );
};

export default Cart;