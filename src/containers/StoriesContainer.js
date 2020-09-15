import React, { useState, useEffect} from 'react';
import Story from '../components/Story';
import { GlobalStyle, StoriesWrapper } from '../styles/StoriesWrapperStyles';
import { getStoryIds } from '../api';
//import { infiniteScroll } from '../hooks/infiniteScroll';

export const StoriesContainer = () => {
    // const { count } = infiniteScroll()
    const [storyIds, setStoryIds] = useState([]);

   
   

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    },[]);

    return(
        <>
        <GlobalStyle />
        <StoriesWrapper data-testid="stories-wrapper">
        <h1>Hacker News Reader</h1>
            {storyIds.map(storyId =>
                 <Story
                    key={storyId}
                    storyId={storyId}
                 />)}
        </StoriesWrapper>
        </>
    )
    
}