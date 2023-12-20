import React from 'react';
import { HouseFill, PersonCircle, PersonFillAdd } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-light d-flex justify-content-between gap-4 p-3 fw-bold links'>
            <div className="text-start">
                <Link className='text-dark p-1' to="/"><HouseFill size={25}/></Link>
            </div>
            <div className="text-end">
                <Link className='text-dark p-1 me-2' to="/sign"><PersonFillAdd size={25}/></Link>
                <Link className='text-dark p-1' to="/login"><PersonCircle size={25}/></Link>
            </div>
        </div>
    );
};

export default Navigation;