import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function Button (props){
    const {backgrndColor, textColor, shadow, borderRadius, border, title, icon, size, ...baseProps } = props;

    return (
        <button className={cn('AppButton', {
            'BackgroundColorWhite': backgrndColor === 'white',
            'BackgroundColorOrange': backgrndColor === 'orange',
            'BackgroundColorNone': backgrndColor === 'none',
            'TextColorWhite': textColor === 'white',
            'TextColorBlack': textColor === 'black',
            'TextColorOrange': textColor === 'orange',
            'Shadow': shadow,
            'NoBorder': border === 'noBorder',
            'BorderRadiusSmall': borderRadius === 'small',
            'BorderRadiusBig': borderRadius === 'big',
            'SizeSmall': size === 'small',
            'SizeMedium': size === 'medium',
            'SizeBig': size === 'big',
        })}
                {...baseProps}> {title} </button>
)
}

Button.propTypes = {
    backgrndColor:PropTypes.oneOf(['white', 'orange', 'none']),
    textColor: PropTypes.oneOf(['white', 'black', 'orange']),
    shadow: PropTypes.bool,
    borderRadius: PropTypes.oneOf(['none', 'small', 'big']),
    title: PropTypes.string,
    icon: PropTypes.string,
    border: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
}
Button.defaultProps = {
    backgrndColor:'orange',
    textColor:'black',
    shadow: false,
    borderRadius:'none',
    icon: null,
    size: 'medium',
}


export default Button;
