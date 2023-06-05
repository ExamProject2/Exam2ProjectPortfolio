import React from "react";
import PropTypes from "prop-types";
import BaseMainPageBlock from "../BaseMainPageBlock";
import PricePlansMenuBoxBlock from "../../PricePlansMenuBoxBlock";
import './style.scss';

const services = {
    list:[
        {serviceName:'UI Design',
        status:true},
        {serviceName:'Web Development',
            status:false}
    ]
}

function PricePlansMenuBlock(service){
    return(
        <BaseMainPageBlock title='Price Plans' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
                <PricePlansMenuBoxBlock title='Silver' text='For most businesses that want to optimize web queries' price='$0.00' services={services.list}/>
                <PricePlansMenuBoxBlock title='Gold' text='For most businesses that want to optimize web queries' price='$50.00' services={services.list}/>
                <PricePlansMenuBoxBlock title='Dimond' text='For most businesses that want to optimize web queries' price='$80.00' services={services.list}/>
        </BaseMainPageBlock>
    )
}

PricePlansMenuBlock.propTypes = {
    title: PropTypes.string,
    skills:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        percent: PropTypes.number
    })),
}
PricePlansMenuBlock.defaultProps = {
    skills:[],
}
export default PricePlansMenuBlock;

