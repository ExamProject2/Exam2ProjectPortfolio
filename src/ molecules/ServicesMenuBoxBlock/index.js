import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import './style.scss';
import Typography from "../../atoms/Typography";
import ProfilePhoto from "../../atoms/icons/Profile.png";

function ServicesMenuBoxBlock (props){
    const {icon, boxTitle, boxText, children} = props;
    return(
        <div className='ServicesMenuBoxBlock'>
            {icon}
            <Typography color='black' fontWeight='body2' variant='title4'>{boxTitle}</Typography>
            <Typography variant='title3'>{boxText}</Typography>
            {children}
        </div>
    )
}

ServicesMenuBoxBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}
export default ServicesMenuBoxBlock;
