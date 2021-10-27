import React from 'react';
import spinner from './spinner.gif';

const Preloader = () => {
    return (
        <div>
            <img alt='spinner' src={spinner} />
        </div>
    )
}

export default Preloader;