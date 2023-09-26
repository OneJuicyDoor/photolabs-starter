import React, { useCallback, useState, useEffect } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    likes: [],
    photos: [],
    topics: []
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  useEffect(() => {
    // Fetch photos from the API
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          photos: data,
        }));
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });

    // Fetch topics from the API
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          topics: data,
        }));
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

  const handlePhotoClick = (photo) => {
    setIsModalOpen(true);
    setModalPhoto(photo);
  };

  const toggleLike = (ID) => {
    if (state.likes.includes(ID)) {
      const copyOfLikes = [...state.likes].filter(
        (likedPhotoId) => likedPhotoId !== ID
      );
      setState({ ...state, likes: copyOfLikes });
      return;
    }

    setState({ ...state, likes: [...state.likes, ID] });
  };

  return {
    toggleLike,
    handlePhotoClick,
    isModalOpen,
    setIsModalOpen,
    modalPhoto,
    state,
    photos: state.photos, // Use the fetched photos
    topics: state.topics, // Use the fetched topics
  };
};

export default useApplicationData;
