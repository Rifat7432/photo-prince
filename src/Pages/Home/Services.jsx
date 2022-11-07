import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const nsviget = useNavigate()
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services/3')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div>
        <h2 className=' text-4xl'>Services</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
            }
        </div>
        <div className='justify-center align-center flex'>
        <button onClick={()=>nsviget('/allservices')} className="btn btn-outline btn-primary">Show All</button>
        </div>
       </div>
    );
};

export default Services;