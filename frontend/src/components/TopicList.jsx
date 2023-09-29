import React from 'react';
import TopicListItem from 'components/TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics, handleTopicClick }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onClick={handleTopicClick} />
      ))}
    </div>
  );
};

export default TopicList;
