import React, { useState } from 'react'
import { data } from '../data/data.js'
import { useNavigate } from 'react-router-dom'
import { useCart } from './CartContext.jsx'
import './Booklist.css'
const Booklist = () => {
    const navigate = useNavigate()
    const [book, setBook] = useState(null)
    const handleDetail = (book) => {
        setBook(book)
        navigate('/bookdetail/' + book.id)
    }
    const { addToCart } = useCart()
    return (
        <div>
            <h1>Booklist</h1>
            <div className='booklist'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='book'>
                            <img src={item.img} alt="" />
                            <h2>{item.title}</h2>
                            <p>{item.author}</p>
                            <p>{item.price}</p>
                            <button onClick={() => handleDetail(item)}>Detail</button>
                            <button onClick={() => addToCart(item)}>Add to cart</button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}


export default Booklist