import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const getStoriesUrl = `${baseUrl}beststories.json?print=pretty`;
export const storyUrl = `${baseUrl}item/`;


export const getStory = async (storyId) => {
    const result = 
        await axios
            .get(`${storyUrl}${storyId}.json`)
                .then(({data}) => data);

    return result;
}

export const getStoryIds = async () => {
    const result = 
        await axios
            .get(getStoriesUrl)
                 //destructure response named data for data only- no headers, etc.
                .then(({data}) => data);

    return result;

}