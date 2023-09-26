import React from "react";
import TopicListItem from "components/TopicListItem"
import "../styles/TopicList.scss";


const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
