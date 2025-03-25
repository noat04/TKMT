import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'
import { useCart } from '../component/CartContext'
const BookDetail = () => {
    const { id } = useParams()
    const book = data.find(item => item.id === parseInt(id))
    const { addToCart } = useCart()
    return (
        <div>
            <h1>Book Detail</h1>
            <img src={book.img}
                alt="" />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <button onClick={() => addToCart(book)}>Add to cart</button>
        </div>
    )
}

export default BookDetail