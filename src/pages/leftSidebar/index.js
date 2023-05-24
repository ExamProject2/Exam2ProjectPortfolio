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
        percent:55,
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
        percent:55,
    }, {
        title:'CSS',
        percent:100,
    },{
        title:'JS',
        percent:15,
    },
    {
        title:'React',
        percent:15,
    },
    {
        title:'Node.js',
        percent:15,
    },
    ]
}
const extraSkills = {
    title:'Extra Skills',
    list:[{
        title:'Bootstrap, Materialize',
    }, {
        title:'Stylus, Sass, Less',
    },{
        title:'Gulp, Webpack, Grunt',
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
