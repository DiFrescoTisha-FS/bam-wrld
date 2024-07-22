import React, { useEffect, Suspense } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { usePageVisibility } from "../hooks/usePageVisibility";
import ArtistInfo from "../components/artistInfo/Artist";
import TwinklingBackground from "../components/twinklingbackground/TwinklingBackground";
import HeroSection from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

const Thoughts = React.lazy(() => import("../components/thoughts/Thoughts"));
const Music = React.lazy(() => import("../components/music/Music"));
const NewSection = React.lazy(() => import("../components/new/NewSection"));
const CommentSection = React.lazy(() => import("../components/commentsection/CommentSection"));

const Home = () => {
  const { state, dispatch } = useUserContext();
  const isVisible = usePageVisibility();

  useEffect(() => {
    console.log("Sidebar Is Open:", state.isOpen);
    console.log("Current User in Sidebar:", state.currentUser);
  }, [state.isOpen, state.currentUser]);

  return (
    <>
      <TwinklingBackground />
      <Sidebar
        isOpen={state.isOpen}
        toggle={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
      />
      <Navbar
        toggle={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
      />
      <HeroSection />
      <ArtistInfo />
      <Suspense fallback={<div>Loading Music...</div>}>
        <Music />
      </Suspense>
      <Suspense fallback={<div>Loading New Section...</div>}>
        <NewSection />
      </Suspense>
      <Suspense fallback={<div>Loading Thoughts...</div>}>
        <Thoughts />
      </Suspense>
      <Suspense fallback={<div>Loading Comments...</div>}>
        <CommentSection currentUser={state.currentUser} dispatch={dispatch} />
      </Suspense>
      {state.successMessage && <div className="message">{state.successMessage}</div>}
      {state.errorMessage && <div className="error-message">{state.errorMessage}</div>}
      <Footer />
    </>
  );
};

export default Home;
