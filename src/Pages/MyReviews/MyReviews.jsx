import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import ShoeReview from '../../Share/ShoeReview';

const MyReviews = () => {

    const { isAdded,user}  = useContext(AuthContext);
    console.log(user,user?.email)
    const reviews = useLoaderData()
    console.log(reviews)
   
    return (
        <div>
            <ShoeReview editable={true}  reviews={reviews}></ShoeReview>
        </div>
    );
};

export default MyReviews;