import React from 'react';
import './Loader.scss';

const Loader = ({ isVisible }) => {
    return (
        <div className={`loader ${isVisible ? 'visible' : ''}`}>
            <div className="double-bounce1" />
            <div className="double-bounce2" />
        </div>
    )
};

export default Loader;