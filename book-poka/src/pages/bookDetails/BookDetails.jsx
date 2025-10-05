import React from 'react';
import SingleBookDetail from '../../components/singleBookDetail/SingleBookDetail';
import { useLoaderData, useParams } from 'react-router';
import { setStoredData } from '../../utility/Utility';

const BookDetails = () => {
    const {id} = useParams();
    const ID = parseInt(id);
    console.log(ID);
    const bookdata = useLoaderData();

    const allBookData = bookdata.find(b => b.bookId === ID);
    
    const handleMarkAsRead = id =>{

        setStoredData(id)
        
    }
    

    return (
        <div>
            <SingleBookDetail handleMarkAsRead = {handleMarkAsRead} allBookData = {allBookData}></SingleBookDetail>
        </div>
    );
};

export default BookDetails;