import React, { useState, useEffect} from 'react';
import Story from '../components/Story';

import { getStoryIds, getStory } from '../services/hnApi';


export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    },[]);

    return storyIds.map(storyId => (
        <Story 
            storyId={storyId}
        />
    ));
}