import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {toggleLike, state, setIsModalOpen, handlePhotoClick, isModalOpen, modalPhoto, photos, topics, profile, username} = useApplicationData()

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setIsModalOpen={setIsModalOpen} handlePhotoClick={handlePhotoClick} toggleLike={toggleLike} likes={state.likes}/>
      {isModalOpen && (
        <div className="modal-overlay">
          <PhotoDetailsModal setIsModalOpen={setIsModalOpen} photo={modalPhoto} likes={state.likes} toggleLike={toggleLike} username={username} profile={profile}/>
        </div>
      )}
    </div>
  );
}

export default App;
