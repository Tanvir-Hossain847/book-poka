import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {

    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;

    return (
       <Link to={`/bookDetails/${bookId}`}>
       <div class="card bg-base-100 w-105 object-cover shadow-sm mx-auto border-1 border-green-500">
  <figure>
    <img
    className='w-70 h-80 object-fill p-5 bg-gray-100 m-2 rounded-lg'
      src= {image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {bookName}
      <div class="badge badge-success">{yearOfPublishing}</div>
      <div class="badge badge-success">{rating}<Star></Star></div>
    </h2>
    <h2 className='font-bold text-lg text-emerald-500'>{author}</h2>
    <h3 className='font-bold'>{publisher}</h3>
    <div class="badge badge-success"> Total Pages: {totalPages}</div>
    <div class="badge badge-success">{category}</div>
    <p className='line-clamp-2'>{review}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-success p-4.5">{tags[0]}</div>
      <div class="badge badge-success p-4.5">{tags[1]}</div>
    </div>
  </div>
</div>
       </Link>
    );
};

export default Book;