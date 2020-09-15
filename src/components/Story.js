import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';


const Story = ({storyId}) => {

    useEffect(() => {

    },[]);

    return (
        <div>
            <p>This is {storyId}</p>
        </div>
    )
}

export default Story;
