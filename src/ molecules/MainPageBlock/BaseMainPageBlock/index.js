import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import Typography from "../../../atoms/Typography";
import './style.scss';

function BaseMainPageBlock(props){
    const {title, text, children}=props;
    return(
        <div className='BaseMainPageBlock'>
            <div className='BlockTitleDiv'>
            <Typography color='black' variant='title2' fontWeight='body1'>{title}</Typography>
            <Typography variant='title3' fontWeight='body3'>{text}</Typography>
            </div>
            <div className='BoxesList'>
                {children}
            </div>
        </div>
    )
}

BaseMainPageBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}
export default BaseMainPageBlock;
