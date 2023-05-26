import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import ProfileBoxBlock from "../../atoms/ProfileBoxBlock";
import InfoBoxBlock from "../../atoms/InfoBoxBlock";
import SkillBoxBlock from "../../atoms/SkillBoxBlock/SkillBoxBlock";
import ExtraSkillBoxBlock from "../../atoms/SkillBoxBlock/ExtraSkillBoxBlock";

const languages = {
    title:'Languages',
    list:[{
        title:'English',
        percent:60,
    }, {
        title:'Ukrainian',
        percent:100,
    },{
        title:'German',
        percent:15,
    },
    ]
}
const skills = {
    title:'Skills',
    list:[{
        title:'Html',
        percent:80,
    }, {
        title:'CSS',
        percent:80,
    },{
        title:'JS',
        percent:55,
    },
    {
        title:'React',
        percent:60,
    },
    {
        title:'Node.js',
        percent:30,
    },
    ]
}
const extraSkills = {
    title:'Extra Skills',
    list:[{
        title:'Bootstrap',
    }, {
        title:'Sass',
    },{
        title:'Figma',
    },
        {
            title:'GIT Knowledge',
        },
    ]
}

function LeftSidebar(){
    return(
        <div className='LeftSidebarDiv'>
           <ProfileBoxBlock/>
            <InfoBoxBlock/>
            <SkillBoxBlock title={languages.title} skills={languages.list}/>
            <SkillBoxBlock title={skills.title} skills={skills.list}/>
            <ExtraSkillBoxBlock title={extraSkills.title} skills={extraSkills.list}/>
        </div>

    )
}

export default LeftSidebar;
