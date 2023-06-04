import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import './style.scss';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/button";
import SkillBlock from "../../atoms/SkillBoxBlock/SkillBlock";
import PricePlansMenuBlock from "../MainPageBlock/PricePlansMenuBlock";

function ServicesMenuBoxBlock (props){
    const {title, price, text, serviceList, services} = props;
    return(
        <div className='ServicesMenuBoxBlock'>
            <Typography color='black' fontWeight='body4' variant='title5'>{title}</Typography>
            <div className='PriceDiv'>
                <Typography color='black' fontWeight='body1' variant='title2'>{price}</Typography>
                <div style={{paddingTop: 16 + 'px'}}><Typography variant='title3'>{'/Hour'}</Typography></div>
            </div>
            <div style={{paddingBottom: 20 + 'px'}}><Typography variant='title3'>{text}</Typography></div>
            {
                // serviceList.map((service, index) => (<div key={index} title={service.title}/>))
            }
            <Button backgrndColor='white' title='ORDER NOW' borderRadius='big' border='noBorder'  shadow='shadow'/>
        </div>
    )
}

ServicesMenuBoxBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}
export default ServicesMenuBoxBlock;
