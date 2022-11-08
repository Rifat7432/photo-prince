import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ShoeReview = ({query}) => {
    const [review,setReview] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${query}`)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
 
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
          
        </table>
      </div>
    );
};

export default ShoeReview;