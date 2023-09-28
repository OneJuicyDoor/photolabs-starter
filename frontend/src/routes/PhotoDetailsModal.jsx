import React from 'react';
import FavBadge from 'components/FavBadge';
import "../App";
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({setIsModalOpen, closeModal, toggleLike, likes, isLiked, photo, photos}) => {
  return (
    <div className="photo-details-modal">
    <button className="photo-details-modal__close-button" onClick={closeModal}>
      <img src={closeSymbol} alt="close symbol" />
    </button>
      <FavBadge onClick={toggleLike} isLiked={isLiked} toggleLike={toggleLike} likes={likes} />
    <div className='photo-details-modal__images'>
      <img className='photo-details-modal__image' src={photo.urls.full} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={`${photo.user.username}'s profile`} />
        <div>
          <h2 className="photo-list__user-name">{photo.user.username}</h2>
          <p className="photo-list__ID">ID: {photo.id}</p>
          <p className="photo-list__user-location"> Location: {photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
    <PhotoList photos={Object.values(photo.similar_photos)} likes={likes} toggleLike={toggleLike} />
  </div>
  )
};

export default PhotoDetailsModal;