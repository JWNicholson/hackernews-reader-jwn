import React, { useState, useEffect } from 'react';
import { convertTime } from '../utils/convertTime';
import { getStory } from '../api';
import { StoryTitle, StoryWrapper, MetaData, MetaDataElement } from '../styles/StoryStyles';
import { CommentsContainer } from '../containers/CommentsContainer';


const Story = ({ storyId }) => {
	
	//set story state with an empty object
	const [
		story,
		setStory
	] = useState({});

    

	const commentsBaseUrl=`https://news.ycombinator.com/item?id=${story.id}`

	useEffect(() => {
		getStory(storyId).then((data) => data && data.url && setStory(data));
		
		
	}, []);

	return story && story.url ? (
		<StoryWrapper data-testid="story">
			<StoryTitle>
				<a href={story.url}>{story.title}</a>
			</StoryTitle>
			<MetaData>
				<span data-testid="story-author">
					<MetaDataElement color="#202020">By:</MetaDataElement>
					{story.by}
				</span>
				<span data-testid="story-time">
					<MetaDataElement>Posted</MetaDataElement>{' '}
                    {convertTime(story.time)} ago.{' '}
					| <a href={commentsBaseUrl}>Comments</a>{' '}
					|{" "}
					<button  
						onClick={() => {
							const {storyId} = this.state;
							CommentsContainer({storyId});
						}}
					><a href="/topcomments">Top Comments</a></button>
				</span>
				<div>
					{/* <p>{JSON.stringify(story)}</p> */}
				<p>{JSON.stringify(story.kids)}</p>
				</div>
				
			</MetaData>
			

			
		</StoryWrapper>
	) : null;
};

export default Story;
