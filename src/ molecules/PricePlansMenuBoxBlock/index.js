import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import './style.scss';
import Typography from "../../atoms/Typography";

function ServicesMenuBoxBlock (props){
    const {popularBox, title, price, text, availableItem} = props;
    return(
        <div className='ServicesMenuBoxBlock'>
            <Typography>{title}</Typography>
            <Typography>{price}</Typography>
        </div>
    )
}

ServicesMenuBoxBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}
export default ServicesMenuBoxBlock;
