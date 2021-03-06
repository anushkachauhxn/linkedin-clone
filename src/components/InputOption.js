import React from 'react';
import './InputOption.css';

function InputOption({ Icon, title, iconColor }) {
    return <div className="inputOption">
        <Icon style={{ color: iconColor}} />
        <h4>{title}</h4>
    </div>;
}

export default InputOption;
