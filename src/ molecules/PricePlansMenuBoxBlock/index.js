import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import './style.scss';
import Typography from "../../atoms/Typography";
import PricePlansMenuBlock from "../MainPageBlock/PricePlansMenuBlock";

function PricePlansMenuBoxBlock (props){
    const {title, price, text, services} = props;
    return(
        <div className='PricePlansMenuBoxBlock'>
            <Typography variant='title5' color='black' fontWeight='body4'>{title}</Typography>
            <>
            <Typography variant='title2' color='black' fontWeight='body1'>{price}</Typography>
            <Typography variant='title3' color='darkGrey' fontWeight='body1'>/Hour</Typography>
            </>
            <Typography variant='title3' color='lightGrey' fontWeight='body1'>{text}</Typography>
            <div className='PricePlansList'>
                {services.map((serviceName, index) => (<PricePlansMenuBlock key={index} serviceName={services.serviceName}></PricePlansMenuBlock>))}
            </div>
        </div>
    )
}

PricePlansMenuBoxBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    services:PropTypes.arrayOf(PropTypes.shape({
        serviceName: PropTypes.string,
    })),
}

PricePlansMenuBoxBlock.defaultProps = {
    services:[],
}
export default PricePlansMenuBoxBlock;
