import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart)
    let totalPrice = 0;
    let shippingPrice = 0;
    for(const product of cart){
        totalPrice += product.price;
        shippingPrice += product.shipping;
    }

    const tax = totalPrice * 3 / 100;

    const grandTotal = totalPrice + shippingPrice + tax;
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingPrice}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;