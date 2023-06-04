import React from "react";
import PropTypes from "prop-types";
import BaseMainPageBlock from "../BaseMainPageBlock";
import './style.scss';
import SkillBoxBlock from "../../../atoms/SkillBoxBlock/SkillBoxBlock";
import ServicesMenuBoxBlock from "../../PricePlansMenuBoxBlock";

// const serviceList = {
//     list:[{
//         title:'UI Design',
//     },
//     {
//         title:'web development',
//     },
//     {
//         title:'logo design',
//     },
//     {
//         title: 'seo optimization',
//     },
//     ]
// }

function PricePlansMenuBlock(){
    return(
        <BaseMainPageBlock title='Price Plans' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
            <div className='PricePlansBoxesDiv'>
                <ServicesMenuBoxBlock title='Silver'  text='For most businesses that want to optimize web queries' price='$0.00' /*services={serviceList.list}*/ />
                <ServicesMenuBoxBlock title='Gold'  text='For most businesses that want to optimize web queries' price='$50.00' />
                <ServicesMenuBoxBlock title='Dimond'  text='For most businesses that want to optimize web queries' price='$80.00' />
            </div>
        </BaseMainPageBlock>
    )
}

PricePlansMenuBlock.propTypes = {
    title: PropTypes.string,
    skills:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
    })),
}
PricePlansMenuBlock.defaultProps = {

}
export default PricePlansMenuBlock;

