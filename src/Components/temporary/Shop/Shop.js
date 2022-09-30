import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
      const [products,setProducts] = useState([]);
      const [cart,setCart] = useState([])

      useEffect( ()=>{
         fetch('productss.json')
         .then(res => res.json())
         .then(data => setProducts(data))
      },[]);
      const handleAddToCart = (product) => {
        //    const newCart = 
            setCart([...cart,product])
      }

    return (
        <div className='flex justify-between  '>
            <div className='w-7/10 grid grid-cols-3 gap-[45px] mx-auto justify-between py-28'>
                 {
                 products.map( product => <Product 
                    Key = {product.id}
                    product={product} 
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                 }
            </div>

            <div className='w-1/5 relative cart-container'> 
                  <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;