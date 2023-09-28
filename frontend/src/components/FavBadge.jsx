import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import '../routes/HomeRoute'

const FavBadge = ({ isFavPhotoExist, toggleLike, photoId, likes }) => {

  const handleClick = () => {
    toggleLike(photoId)
  } 

   const selectedIcon = likes.includes(photoId)
  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} isClicked={selectedIcon} />
    </div>
  );
};

export default FavBadge;
