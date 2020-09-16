import React, { useState, useEffect} from 'react';
import Comments from '../components/Comments';
import { CommentsWrapper } from '../styles/CommentsWrapperStyles';


export const CommentsContainer = () => {
    // const [storyComments, setStoryComments] = useState([]);

    
    return (
       <>
        
        <CommentsWrapper >
            <Comments
            
            />
        </CommentsWrapper>
       </>
    )
}


