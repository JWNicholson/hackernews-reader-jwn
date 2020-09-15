import axios from 'axios';

import { selectData } from '../selectors/selectData';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const getStoriesUrl = `${baseUrl}beststories.json?print=pretty`;
export const storyUrl = `${baseUrl}item/`;



export const getStoryIds = () => {
    const result = 
          axios
            .get(getStoriesUrl)
                 //destructure response named data for data only- no headers, etc.
                .then(({data}) => data);

    return result;

}


export const getStory = (storyId) => {
    const result = 
         axios
            .get(`${storyUrl}${storyId}.json`)
                .then(({data}) => data && selectData(data));

    return result;
}

