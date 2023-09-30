import React from "react";
import FavBadge from 'components/FavBadge';
import "../styles/PhotoListItem.scss";
import "../App";

const PhotoListItem = ({ username, imageSource, photoId, location, profile, toggleLike, isLiked, setIsModalOpen, handlePhotoClick, photo, likes }) => {

  return (
    <div className="photo-list-item">
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} onClick={() => handlePhotoClick(photo)}  />
      <FavBadge  isLiked={isLiked} toggleLike={toggleLike} photoId={photoId} likes={likes} />
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
        <div className="photo-list__user-info" >
          <h2 className="photo-list__user-name" >{username}</h2>
          <p className="photo-list__user-location"> Location: {location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;