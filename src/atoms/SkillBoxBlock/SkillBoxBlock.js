import React from "react";
import PropTypes from "prop-types";
import SkillBlock from "./SkillBlock";
import BaseSkillBoxBlock from "./BaseSkillBoxBlock";

function SkillBoxBlock(props){
    const {title, skills} = props;
    return(
        <BaseSkillBoxBlock title={title} >
            {
                skills.map((skill, index) => (<SkillBlock key={index} title={skill.title} percent={skill.percent}/>))
            }
        </BaseSkillBoxBlock>
    )
}

SkillBoxBlock.propTypes = {
    title: PropTypes.string,
    skills:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        percent: PropTypes.number
    })),
}
SkillBoxBlock.defaultProps = {
    skills:[],
}
export default SkillBoxBlock;
