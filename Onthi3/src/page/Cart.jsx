import React from 'react'
import { useCart } from '../component/CartContext'
const Cart = () => {
    const { cart, addToCart, removeFromCart, totalItems, totalAmount } = useCart();
    const hanleCheckout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty')
        } else {
            alert('Checkout success')
        }
    }
    return (
        <div>
            <h1>Cart</h1>
            <h2>Total Items: {totalItems}</h2>
            <h2>Total Amount: {totalAmount}</h2>
            <button onClick={hanleCheckout}>Checkout</button>
            {cart.length === 0 ? (<h3>Your cart is empty</h3>) :
                (cart.map(item => (
                    <div key={item.id}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0', padding: '5px', border: '1px solid #ccc' }}>
                        <img src={item.img}
                            alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                        <p>{item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                )))
            }
        </div >
    )
}

export default Cart