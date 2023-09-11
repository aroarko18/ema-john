import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {name, price, seller, img, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='add-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;