import React, { useEffect, useState } from 'react'

const Products = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts=async()=>{
            const response=await fetch('https://fakestoreapi.com/products');
            const data=await response.json();
            setProducts(data);
            console.log(data) //to check the data 
        }
        fetchProducts();
    },[])
    return (
      <div className='productsWrapper'>
        {
          products.map((currelem)=>{
            const {id,title,image,price,description} = currelem;
            return(
              <div className='product' key={id}>
                <img src={image} alt={title} />
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <h3>{price}</h3>
                  <button className='btn'>Add to button</button>
                  </div>
            )

          })
        }
      </div>
        
  )
}

export default Products