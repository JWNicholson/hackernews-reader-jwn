import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';


const Story = ({storyId}) => {
    //set story state with an empty object
    const [story, setStory] = useState({});


    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    },[]);

    return (
        <div>
            <p>{JSON.stringify(story)}</p>
        </div>
    )
}

export default Story;
