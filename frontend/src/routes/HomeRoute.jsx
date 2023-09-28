import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setIsModalOpen, handlePhotoClick, likes, toggleLike }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} likes={likes} toggleLike={toggleLike} />
      <PhotoList photos={photos} toggleLike={toggleLike} likes={likes} setIsModalOpen={setIsModalOpen} handlePhotoClick={handlePhotoClick}/>
    </div>
  );
};

export default HomeRoute;
