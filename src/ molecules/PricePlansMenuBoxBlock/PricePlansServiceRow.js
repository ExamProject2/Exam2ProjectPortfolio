import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import './style.scss';
import Typography from "../../atoms/Typography";
import {ReactComponent as ActiveIcon} from "../../atoms/icons/Active.svg";
import {ReactComponent as DisableIcon} from "../../atoms/icons/Close.svg";
import Button from "../../atoms/button";

function PricePlansServiceRow (props){
    const {isActive, title, btnColor} = props;
    return(
        <div className='PricePlansServiceRow'>
            {isActive ? <ActiveIcon/> : <DisableIcon/>}
            <Typography variant='title3' color={isActive ? 'black' : 'lightGrey'} fontWeight='body3'>{title}</Typography>
        </div>
    )
}

PricePlansServiceRow.propTypes = {
    title: PropTypes.string,
    isActive: PropTypes.bool,
}

PricePlansServiceRow.defaultProps = {
    isActive:false,
}
export default PricePlansServiceRow;
