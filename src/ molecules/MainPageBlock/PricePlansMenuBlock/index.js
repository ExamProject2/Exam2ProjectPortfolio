import React from "react";
import PropTypes from "prop-types";
import BaseMainPageBlock from "../BaseMainPageBlock";
import PricePlansMenuBoxBlock from "../../PricePlansMenuBoxBlock";
import './style.scss';

const services = {
    SilverList:[
        {serviceName:'UI Design',
         status:true},
        {serviceName:'Web Development',
         status:true},
        {serviceName:'Logo Design',
         status:false},
        {serviceName:'Seo Optimization',
         status:false},
        {serviceName:'WordPress Integration',
         status:false},
        {serviceName:'5 Websites',
         status:false},
        {serviceName:'Unlimited User',
         status:false}
    ],
    GoldList:[
        {serviceName:'UI Design',
            status:true},
        {serviceName:'Web Development',
            status:true},
        {serviceName:'Logo Design',
            status:true},
        {serviceName:'Seo Optimization',
            status:true},
        {serviceName:'WordPress Integration',
            status:false},
        {serviceName:'5 Websites',
            status:false},
        {serviceName:'Unlimited User',
            status:false}
    ],
    DiamondList:[
        {serviceName:'UI Design',
            status:true},
        {serviceName:'Web Development',
            status:true},
        {serviceName:'Logo Design',
            status:true},
        {serviceName:'Seo Optimization',
            status:true},
        {serviceName:'WordPress Integration',
            status:true},
        {serviceName:'5 Websites',
            status:true},
        {serviceName:'Unlimited User',
            status:true}
    ]
}

function PricePlansMenuBlock(service){
    return(
        <BaseMainPageBlock title='Price Plans' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
                <PricePlansMenuBoxBlock title='Silver' text='For most businesses that want to optimize web queries' price='$0.00' services={services.SilverList}/>
                <PricePlansMenuBoxBlock title='Gold' text='For most businesses that want to optimize web queries' price='$50.00' services={services.GoldList}/>
                <PricePlansMenuBoxBlock title='Diamond' text='For most businesses that want to optimize web queries' price='$80.00' services={services.DiamondList}/>
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

