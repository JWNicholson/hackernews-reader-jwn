import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import { StoriesContainer } from './containers/StoriesContainer';
import  CommentsContainer  from './containers/CommentsContainer';


export const App = () => {

    

	return(
    <>
     <Router>
        <Navbar />
        <Route exact path="/" component={StoriesContainer} />
        <Route path="/topcomments" component={CommentsContainer} />
        </Router>
    </>    
    ) ;
};
