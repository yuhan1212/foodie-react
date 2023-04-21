import React from 'react';
import { Link } from 'react-router-dom';

const LoginAlert = () => {
    return (
        <div className='alert alert-warning mt-2'>
            Please <Link to="/login">login</Link> first
        </div>
    )
}

export default LoginAlert;