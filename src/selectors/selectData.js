//set the data fields we want, anything unsuspected as empty object
export const selectData = ({id, title, by, time, url} = {}) => ({
    id, title, by, time, url
});