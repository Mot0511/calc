import React from 'react';
import cl from './myinput.module.css'

const Myinput = (props) => {
    return (
        <div>
            <input  className={cl.input} placeholder={props.text} {...props} />
        </div>
    );
};

export default Myinput;