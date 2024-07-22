// src/contexts/UserContext.jsx

import React, { createContext, useReducer, useContext, useEffect } from "react";
import { auth } from "../firebase";
import axios from 'axios';

// Your existing context and state management code...

const UserContext = createContext();

const initialState = {
  currentUser: null,
  comment: '',
  rating: 0,
  errorMessage: "",
  successMessage: "",
  isOpen: false,
};

const SET_CURRENT_USER = "SET_CURRENT_USER";
const SET_COMMENT = "SET_COMMENT";
const SET_RATING = "SET_RATING";
const CLEAR_CURRENT_USER = "CLEAR_CURRENT_USER";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";
const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE";
const CLEAR_SUCCESS_MESSAGE = "CLEAR_SUCCESS_MESSAGE";
const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_COMMENT:
      return { ...state, comment: action.payload };
    case SET_RATING:
      return { ...state, rating: action.payload };
    case CLEAR_CURRENT_USER:
      return { ...state, currentUser: null };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: "" };
    case SET_SUCCESS_MESSAGE:
      return { ...state, successMessage: action.payload };
    case CLEAR_SUCCESS_MESSAGE:
      return { ...state, successMessage: "" };
    case TOGGLE_SIDEBAR:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: SET_CURRENT_USER, payload: user });
      } else {
        dispatch({ type: SET_CURRENT_USER, payload: null });
      }
    });

    return () => unsubscribe();
  }, []);

  const setComment = (comment) => {
    dispatch({ type: SET_COMMENT, payload: comment });
  };

  const setRating = (rating) => {
    dispatch({ type: SET_RATING, payload: Number(rating) });
  };

  const setErrorMessage = (errorMessage) => {
    dispatch({ type: SET_ERROR_MESSAGE, payload: errorMessage });
  };

  const clearErrorMessage = () => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
  };

  const setSuccessMessage = (successMessage) => {
    dispatch({ type: SET_SUCCESS_MESSAGE, payload: successMessage });
  };

  const clearSuccessMessage = () => {
    dispatch({ type: CLEAR_SUCCESS_MESSAGE });
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const { currentUser, comment, rating } = state;
  
    if (!currentUser) {
      setErrorMessage("You must be logged in to submit a comment and rating.");
      return;
    }
  
    try {
      const token = await auth.currentUser.getIdToken();
      console.log('Submitting comment with data:', { userId: currentUser.uid, comment, rating });
  
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/comment-rating`, {
        userId: currentUser.uid,
        comment,
        rating
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
  
      console.log('Response from server:', response.data);
  
      dispatch({ type: SET_SUCCESS_MESSAGE, payload: 'Comment submitted successfully!' });
      dispatch({ type: SET_COMMENT, payload: '' });
      dispatch({ type: SET_RATING, payload: 0 });
    } catch (err) {
      setErrorMessage('Error submitting comment.');
      console.error("Error submitting comment and rating:", err.response?.data || err.message);
    }
  };  

  const contextValue = {
    state,
    setComment,
    setRating,
    handleCommentSubmit,
    dispatch,
    setErrorMessage,
    clearErrorMessage,
    setSuccessMessage,
    clearSuccessMessage,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
