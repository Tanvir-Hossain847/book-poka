import React from 'react';

const SingleBookDetail = ({allBookData, handleMarkAsRead}) => {
    console.log(allBookData);
    
        const {bookId, bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = allBookData;
    return (
        <div className="flex justify-around w-3/4 mx-auto py-10 bg-gray-800 p-5 rounded-lg">
        <div>
            <img className='w-600 rounded-md' src={image} alt="" />
        </div>
        <div className="p-5">
            
            <div className="font-bold border-b-1 border-gray-400 py-5">
                <h1 className='text-3xl py-3'>{bookName}</h1>
                <p className='text-lg'>By:{author}</p>
            </div>

            <h3 className='text-xl text-gray-300 py-3 border-b-1 border-gray-400'>{category}</h3>

            <div className="py-5 border-b-1 border-gray-500">
                <p className='text-gray-400'><span className='font-bold pr-1 text-white'>Review:</span>{review}</p>
                <p className='flex gap-5 py-3'><span className='font-bold'>Tag:</span>
                <div className="badge badge-success">{tags[0]}</div>
                <div className="badge badge-success">{tags[1]}</div>
                </p>
            </div>

            <div className="text-gray-400">
                <p className='pt-3'><span className='font-bold text-white pr-4'>Number of Pages:</span>{totalPages}</p>
                <p className='pt-3'><span className='font-bold text-white pr-4'>Publisher:</span>{publisher}</p>
                <p className='pt-3'><span className='font-bold text-white pr-4'>Year of Publishing:</span>{yearOfPublishing}</p>
                <p className='pt-3'><span className='font-bold text-white pr-4'>Rating:</span>{rating}</p>
            </div>

            <div className="py-5">
                <button onClick={() => handleMarkAsRead(bookId)} className='btn mr-2 px-5'>Mark As Read</button>
                <button className='btn btn-success ml-2'>Whishlist</button>
            </div>
        </div>
        </div>
    );
};

export default SingleBookDetail;