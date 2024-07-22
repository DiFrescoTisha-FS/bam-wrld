import React, { useState, useMemo, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import Rating from "react-rating-stars-component";
import { BsSendFill } from "react-icons/bs";
import useCloudinary from "../../hooks/useCloudinary";
import {
  SectionContainer,
  SectionBg,
  SectionWrapper,
  FlexibleLayout,
  TextWrapper,
  BtnWrap,
  FormWrap,
  TextArea,
  StyledImage,
  StyledText,
  Topline,
  Heading,
} from "../StyledComponents.jsx";
import { CommentImgWrap } from "./CommentSectionElements.jsx";
import "./comment.css"; // Import the CSS file

const CommentSection = () => {
  const { state, setComment, setRating, handleCommentSubmit, setErrorMessage } = useUserContext();
  const { currentUser, comment, rating, errorMessage, successMessage } = state;
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const cloudinaryInstance = useCloudinary();

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image("COMMENTBG_2_mctqkg").toURL({
      transformation: [
        { width: 1920, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const contentImageUrl = useMemo(() => {
    return cloudinaryInstance
      .image("bam1_Small_sluuou-fotor-2024053015615_pbmxlq")
      .toURL({
        transformation: [
          { width: 455, height: 455, crop: "fill" },
          { quality: "auto" },
          { fetch_format: "auto" },
        ],
      });
  }, [cloudinaryInstance]);

  const handleRatingChange = (newRating) => {
    console.log('Rating changed:', newRating);
    setRating(Number(newRating)); // Ensure the rating is a number
  };

  const handleCommentChange = (event) => {
    console.log('Comment changed:', event.target.value);
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log('Submitting comment/rating...');
    event.preventDefault();
    if (!currentUser) {
      console.log('User not logged in');
      setErrorMessage("Login required to leave a comment or rate. Please log in to continue.");
      setShowLoginMessage(true);
      setTimeout(() => setShowLoginMessage(false), 3000); // Hide message after 3 seconds
      return;
    }
    await handleCommentSubmit(event); // Call the submit function if the user is logged in
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (errorMessage || successMessage) {
        setErrorMessage("");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorMessage, successMessage, setErrorMessage]);

  return (
    <SectionContainer id="comments">
      <SectionBg>
        <StyledImage
          src={desktopUrl}
          alt="Crescent Moon"
          $position="absolute"
          $width="100%"
          $height="auto"
          $objectFit="contain"
          $top={0}
          $left={0}
          loading="lazy"
        />
      </SectionBg>
      <SectionWrapper style={{ zIndex: "20" }}>
        <FlexibleLayout $reverse={false}>
          <CommentImgWrap className="mr-4">
            <StyledImage
              src={contentImageUrl}
              alt="Artist Looking Up At Camera"
              $position="relative"
              $width="455px"
              $height="auto"
              $borderRadius="10px"
              $border="2px solid #ac94f4"
              $zIndex="10"
              loading="lazy"
            />
          </CommentImgWrap>
          <TextWrapper>
            <Topline className="text-center">
              Bam Fans
            </Topline>
            <Heading className="text-center">
              Before you go...
            </Heading>
            <StyledText
              $fontSize="20px"
              $lineHeight="26px"
              $color="#fff"
              $marginTop="30px"
              $marginBottom="25px"
              $maxWidth="440px"
              $phoneFontSize="18px"
            >
              Tell Bam what you loved most about your galaxy tour and rate your
              adventure!” Thanks for stopping by.
            </StyledText>
            <FormWrap onSubmit={handleSubmit}>
              <Rating
                value={Number(rating)} // Ensure rating is a number
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
              />
              <TextArea
                placeholder="Leave a comment"
                value={comment}
                onChange={handleCommentChange}
              />
              {showLoginMessage && (
                <div style={{ color: "red", marginTop: "10px" }}>
                  You must be logged in to leave a comment or rate.
                </div>
              )}
              <BtnWrap>
                <button className="send-button" type="submit">
                  <BsSendFill size={20} className="icon" />
                  <span className="text-[#010606] hover:text-[#ac94f4]">Send</span>
                </button>
              </BtnWrap>
              {errorMessage && (
                <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
              )}
              {successMessage && (
                <div style={{ color: "green", marginTop: "10px" }}>{successMessage}</div>
              )}
            </FormWrap>
          </TextWrapper>
        </FlexibleLayout>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default CommentSection;
