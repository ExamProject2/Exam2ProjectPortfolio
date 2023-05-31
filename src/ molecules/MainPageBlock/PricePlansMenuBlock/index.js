import React from "react";
import PropTypes from "prop-types";
import BaseMainPageBlock from "../BaseMainPageBlock";
import './style.scss';

function PricePlansMenuBlock(){
    return(
        <BaseMainPageBlock title='Price Plans' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
            {

            }
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

