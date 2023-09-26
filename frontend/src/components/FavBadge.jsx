import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import '../routes/HomeRoute'

const FavBadge = ({ isFavPhotoExist, toggleLike, photoId, likes }) => {

  // const [isClicked, setIsClicked] = useState(false);
  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  //   toggleLike(1)
  // };
  const handleClick = () => {
    toggleLike(photoId)
  } 
 console.log(likes)
// state needs to be here. of likes array of Icons 
   const selectedIcon = likes.includes(photoId)
  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} isClicked={selectedIcon} />
    </div>
  );
};

export default FavBadge;
