import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import '../routes/HomeRoute'

const FavBadge = ({ isFavPhotoExist, toggleLike, photoId, likes, isInsideModal }) => {

  const handleClick = () => {
    toggleLike(photoId)
  } 

   const selectedIcon = likes.includes(photoId)
  return (
    <div className={isInsideModal ? '' : 'fav-badge'} onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} isClicked={selectedIcon} />
    </div>
  );
};

export default FavBadge;
