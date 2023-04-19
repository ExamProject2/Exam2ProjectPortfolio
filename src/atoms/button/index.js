import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function Button (props){
    const {backgrndColor, textColor, shadow, borderRadius, border, title, icon, size} = props;

    return (
        <button className={cn('AppButton', {
            'BackgroundColorWhite': backgrndColor === 'white',
            'BackgroundColorOrange': backgrndColor === 'orange',
            'TextColorWhite': textColor === 'white',
            'TextColorBlack': textColor === 'black',
            'Shadow': shadow,
            'Border': border,
            'BorderRadiusSmall': borderRadius === 'small',
            'BorderRadiusBig': borderRadius === 'big',
            'SizeSmall': size === 'small',
            'SizeMedium': size === 'medium',
            'SizeBig': size === 'big',
        })}> {title} </button>
)
}

Button.propTypes = {
    backgrndColor:PropTypes.oneOf(['white', 'orange']),
    textColor: PropTypes.oneOf(['white', 'black']),
    shadow: PropTypes.bool,
    borderRadius: PropTypes.oneOf(['none', 'small', 'big']),
    title: PropTypes.string,
    icon: PropTypes.string,
    border: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
}
Button.defaultProps = {
    backgrndColor:'orange',
    textColor:'black',
    shadow: false,
    borderRadius:'none',
    icon: null,
    border: false,
    size: 'medium',
}


export default Button;
