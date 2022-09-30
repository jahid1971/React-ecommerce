import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './product.css'

const Product = (props) => {
    const {name, seller, price, ratings, img, id } = props.product
    return (
        <div className='h-[508px] w-[300px] border border-1 rounded-lg flex flex-col justify-between '>
            <img src={img} alt="" className='h-[286px] w-[286px] m-2 rounded-lg' />

           <div className='mx-[14px] '>
                <p className='name'>{name}</p>
                <p className='name-price price'>Price: {price}</p>
                <p className='mt-[12px] seller-rating'> Seller: {seller}</p>
                <p className='seller-rating'> Rating: {ratings}</p> 
           </div>
           <button onClick={ () => props.handleAddToCart(props.product) } className='w-full bg-[#FFE0B3] hover:bg-amber-500 py-4 rounded-b-lg '>
             Add to cart
             <FontAwesomeIcon icon={faShoppingCart} className="ml-3" />
             </button>
        </div>
    );
};

export default Product;