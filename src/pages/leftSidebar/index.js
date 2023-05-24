import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import ProfileBoxBlock from "../../atoms/ProfileBoxBlock";
import InfoBoxBlock from "../../atoms/InfoBoxBlock";
import SkillBoxBlock from "../../atoms/SkillBoxBlock";

function LeftSidebar(){
    return(
        <div className='LeftSidebarDiv'>
           <ProfileBoxBlock/>
            <InfoBoxBlock/>
            <SkillBoxBlock title='Languages' skillName='Ukrainian' percent='100%' filledPercent={100}></SkillBoxBlock>
            <SkillBoxBlock title='Skills' skillName='Html' percent='90%' filledPercent={90}></SkillBoxBlock>
        </div>

    )
}

export default LeftSidebar;
