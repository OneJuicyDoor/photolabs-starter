import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setIsModalOpen, handlePhotoClick, handleTopicClick, likes, toggleLike }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} likes={likes} toggleLike={toggleLike} handleTopicClick={handleTopicClick}/>
      <PhotoList photos={photos} toggleLike={toggleLike} likes={likes} setIsModalOpen={setIsModalOpen} handlePhotoClick={handlePhotoClick}/>
    </div>
  );
};

export default HomeRoute;
