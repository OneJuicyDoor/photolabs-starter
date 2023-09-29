import React, { useCallback, useReducer, useEffect } from 'react';

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return { ...state, photos: action.payload };
    case 'SET_TOPICS':
      return { ...state, topics: action.payload };
    case 'TOGGLE_LIKE':
      if (state.likes.includes(action.payload)) {
        const copyOfLikes = state.likes.filter((likedPhotoId) => likedPhotoId !== action.payload);
        return { ...state, likes: copyOfLikes };
      } else {
        return { ...state, likes: [...state.likes, action.payload] };
      }
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, modalPhoto: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, modalPhoto: null };
    default:
      return state;
  }
};

const apiBaseUrl = 'http://localhost:8001/api';

const useApplicationData = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    likes: [],
    photos: [],
    topics: [],
    isModalOpen: false,
    modalPhoto: null,
  });


  useEffect(() => {
    // Fetch photos from the API
    fetch(`${apiBaseUrl}/photos`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PHOTOS', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });

    // Fetch topics from the API
    fetch(`${apiBaseUrl}/topics`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_TOPICS', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  const handlePhotoClick = useCallback((photo) => {
    dispatch({ type: 'OPEN_MODAL', payload: photo });
  }, []);

  const handleTopicClick = useCallback((topicId) => {
    // Handle the topic click here and update the state
    // You can fetch the data related to the clicked topic and update the state accordingly
    fetch(`${apiBaseUrl}/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data)
        // Update state with data related to the clicked topic
        // For example: dispatch({ type: 'SET_TOPIC_DATA', payload: data });
        dispatch({ type: 'SET_PHOTOS', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topic data:', error);
      });
  }, []);

  const toggleLike = useCallback((ID) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: ID });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
  }, []);

  return {
    toggleLike,
    handlePhotoClick,
    handleTopicClick,
    isModalOpen: state.isModalOpen,
    closeModal,
    modalPhoto: state.modalPhoto,
    state,
    photos: state.photos,
    topics: state.topics,
  };
};

export default useApplicationData;
