import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import '../routes/HomeRoute';
import FavIcon from './FavIcon';



const TopNavigation = ({ topics, likes, handleTopicClick}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <nav className="top-nav-bar__nav">
        <ul className="top-nav-bar__nav-list">
          <TopicList topics={topics} handleTopicClick={handleTopicClick}/>
        </ul>
      </nav>
      <FavIcon likes={likes} displayAlert={likes.length > 0} isClicked={likes.length > 0}/>
    </div>
  );
};

export default TopNavigation;