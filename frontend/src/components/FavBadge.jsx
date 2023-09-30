import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import '../routes/HomeRoute'

const FavBadge = ({ isFavPhotoExist, toggleLike, photoId, likes, isInsideModal, isLiked }) => {

  const handleClick = () => {
    toggleLike(photoId)
    console.log(likes)
  } 

   const selectedIcon = likes.includes(photoId)
  return (
    <div className={isInsideModal ? '' : 'fav-badge'} onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} isClicked={isLiked} />
    </div>
  );
};

export default FavBadge;
