import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';

function ProgressBar(props){
    const {size, borderSize, progress, borderColor, progressColor, barColor} = props;
    const appProgressBar = {}
    if(typeof size === 'number'){
        appProgressBar.height = `${size}px`;
    }
    if(typeof borderSize === 'number'){
        appProgressBar.borderWidth = `${borderSize}px`;
    }
    return(
        <div className={cn('AppProgressBar', {
            'SizeSmall': size === 'small',
            'SizeMedium': size === 'medium',
            'SizeLarge': size === 'large',
            'BorderColorWhite': borderColor === 'white',
            'BorderColorOrange': borderColor === 'orange',
            'BarColorOrange': barColor === 'orange',
            'BarColorWhite': barColor === 'white',
        })} style={appProgressBar}>
            <div className={cn('AppProgress', {
                'ProgressColorWhite': progressColor === 'white',
                'ProgressColorOrange': progressColor === 'orange',
            })} style={{width: `${progress}%`}}>
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'number']),
    borderSize: PropTypes.number,
    progress: PropTypes.number,
    borderColor: PropTypes.oneOf(['none', 'white', 'orange']),
    progressColor: PropTypes.oneOf(['none', 'white', 'orange']),
    barColor: PropTypes.oneOf(['none', 'white', 'orange']),
}
ProgressBar.defaultProps={
    borderSize: null,
    progress: 0,
    borderColor: 'orange',
    progressColor: 'orange',
}

export default ProgressBar;
