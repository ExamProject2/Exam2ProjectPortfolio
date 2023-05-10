import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function Paper (props){
    const {color} = props;
    return(
        <div className={cn ('PaperDiv', {
            'BackgroundColorWhite': color === 'white',
        } )}></div>
    )
}

Paper.propTypes = {
    color: PropTypes.oneOf(['white']),
}
export default Paper;
