import React, { useEffect, useState } from 'react';
import Book from '../../components/book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([])
    


   useEffect(() =>{
    fetch('/public/booksData.json')
    .then(res => res.json())
    .then(data => {
        setAllBooks(data);
    })
   },[])

    return (
        <div className='grid grid-cols-3 gap-6 mx-auto w-11/12 py-10'>
            {
                allBooks.map(book => <Book key={book.bookId} book = {book}></Book>)
            }
        </div>
    );
};

export default Books;