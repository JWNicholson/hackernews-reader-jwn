import styled from 'styled-components';

export const StoryWrapper = styled.section`
    margin-bottom: 1.25rem;
    padding-top: 0.6rem;
    border-top: 1px solid #dcdcdc;

    &:first-of-type {
        border:none;
    }

    &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

export const StoryTitle = styled.h1`
 
  font-size: 1.12rem;
  line-height: 1.6;
  margin: 0;
  text-decoration: none;
  a {
    color: #333332;
    background-color: #aaf83d;
    text-decoration: none;
  }
`;

export const MetaData = styled.div`
  font-style: italic;
  > span:first-child {
    margin-right: 10px;
  }
  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }
  .story__meta-bold {
    font-weight: bold;
  }
`;

export const MetaDataElement = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`;