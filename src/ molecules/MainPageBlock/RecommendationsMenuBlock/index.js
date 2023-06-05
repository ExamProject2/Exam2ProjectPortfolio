import React from "react";
import BaseMainPageBlock from "../BaseMainPageBlock";
import './style.scss';
import RecommendationsMenuBoxBlock from "../../RecommendationsMenuBoxBlock";
import PhotoDesigner from '../../../atoms/icons/PhotoDesigner.png';
import PhotoPhotographer from '../../../atoms/icons/PhotoPhotographer.png';
import PhotoBusinessMan from '../../../atoms/icons/PhotoBusinessMan.png';
function RecommendationsMenuBlock(){
    return(
        <BaseMainPageBlock title='Recommendations' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
            <div className='RecommendationsMenuDiv'>
                <RecommendationsMenuBoxBlock title='Great Quality!' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....' name='James Gouse' profession='Graphic Designer' photo={PhotoDesigner}/>
                <RecommendationsMenuBoxBlock title='Amazing Work!' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....' name='Tiana Philips' profession='Photographer' photo={PhotoPhotographer}/>
                <RecommendationsMenuBoxBlock title='Great Quality!' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....' name='Talan Westervelt' profession='Business man' photo={PhotoBusinessMan}/>
            </div>
        </BaseMainPageBlock>
    )
}

export default RecommendationsMenuBlock;
