import React from "react";
import PropTypes from "prop-types";
import ExtraSkillBlock from "./ExtraSkillBlock";
import BaseSkillBoxBlock from "./BaseSkillBoxBlock";


function ExtraSkillBoxBlock(props){
    const {title, skills,} = props;
    return(
        <BaseSkillBoxBlock title={title} >
            {
                skills.map((skill, index) => (<ExtraSkillBlock key={index} title={skill.title}/>))
            }
        </BaseSkillBoxBlock>
    )
}

ExtraSkillBoxBlock.propTypes = {
    title: PropTypes.string,
    skills:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
    })),
}
ExtraSkillBoxBlock.defaultProps = {
    skills:[],
}
export default ExtraSkillBoxBlock;
