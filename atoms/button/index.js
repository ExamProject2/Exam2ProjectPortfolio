import React from "react";
import PropTypes from "prop-types";
import './style.scss';
function Button (props){
const {backgrndColor, textColor, shadow, borderRadius, title} = props;
const className = 'Btn ' + (backgrndColor === 'orange' ? 'orange' : 'transparent')

return (
    <div className='Button'>
        <button className={className}> {title} </button>
    </div>
)
}

Button.PropTypes = {
    backgrndColor: PropTypes.string,
    textColor: PropTypes.string,
    shadow: PropTypes.string,
    borderRadius: PropTypes.number,
    title: PropTypes.string
}

export default Button;
