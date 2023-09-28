import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../App';

const PhotoList = (props) => {
  const { photos, toggleLike, setIsModalOpen, handlePhotoClick, likes } = props
  
  const list = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      imageSource={photo.urls.regular}
      location={photo.location}
      username={photo.user.username}
      photoId={photo.id}
      profile={photo.user.profile}
      toggleLike={toggleLike}
      setIsModalOpen={setIsModalOpen}
      handlePhotoClick={handlePhotoClick}
      photo={photo}
      likes={likes}
    />
  ))
  return (
    <div>
      {list}
    </div>
  );
};

export default PhotoList;
