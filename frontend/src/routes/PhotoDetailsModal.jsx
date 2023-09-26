import React from 'react';
import FavBadge from 'components/FavBadge';
import "../App";
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({setIsModalOpen, toggleLike, likes, isLiked, photo, photos}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={ () => setIsModalOpen(false) } >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* <FavBadge onClick={handleLikeClick} isLiked={isLiked} toggleLike={toggleLike} /> */}
      <div className='photo-details-modal__images'>
      <img className='photo-details-modal__image' src={photo.urls.full} />
       <div className="photo-list__user-details">
       <img className="photo-list__user-profile" src={photo.user.profile} alt={`${photo.user.username}'s profile`} />
        <div>
          <h2 className="photo-list__user-name" >{photo.user.username}</h2>
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


// id
// : 
// "1"
// imageSource
// : 
// "/Image-1-Regular.jpeg"
// isLiked
// : 
// undefined
// location
// : 
// {city: 'Montreal', country: 'Canada'}
// profile
// : 
// "/profile-1.jpg"
// toggleLike
// : 
// ƒ toggleLike(ID)
// username
// : 
// "exampleuser"