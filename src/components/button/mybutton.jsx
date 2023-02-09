import React from 'react';
import cl from './mybutton.module.css'

const Mybutton = (props) => {
    return (
        <div>
            <button className={cl.button} {...props}>{props.text}</button>
        </div>
    );
};

export default Mybutton;