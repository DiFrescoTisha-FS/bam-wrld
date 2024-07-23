import React, { useMemo, useState, useEffect } from "react";
import {
  SectionBg,
  SectionWrapper,
  ButtonIcon,
  StyledText,
  StyledImage,

} from "../StyledComponents";
import {
  ArtistImgWrap,
  SectionContainer,
  FlexibleLayout,
  TextWrapper,
  Topline,
  Heading,
  BtnWrap,
  Button,

} from "./ArtistElements";
import useCloudinary from "../../hooks/useCloudinary";
import {
  FaRocket as RocketIcon,
  FaArrowAltCircleDown as ArrowIcon,
} from "react-icons/fa";

const ArtistSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const cloudinaryInstance = useCloudinary();

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image("ARTISTDD_vmsgcd").toURL({
      transformation: [
        { width: 1920, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const mobileUrl = useMemo(() => {
    return cloudinaryInstance.image("ARTISTDD_vmsgcd").toURL({
      transformation: [
        { width: 386, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const smallMobileUrl = useMemo(() => {
    return cloudinaryInstance.image("ARTISTDD_vmsgcd").toURL({
      transformation: [
        { width: 300, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const contentImageUrl = useMemo(() => {
    return cloudinaryInstance
      .image(
        "bam_shooter_kujs9e_e_improve_e_sharpen-fotor-2024053015749_x9rsmf"
      )
      .toURL({
        transformation: [
          { width: 455, height: 455, crop: "fill" },
          { quality: "auto" },
          { fetch_format: "auto" },
          { secure: true },
        ],
      });
  }, [cloudinaryInstance]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 300) {
        setImageUrl(smallMobileUrl);
      } else if (window.innerWidth <= 386) {
        setImageUrl(mobileUrl);
      } else {
        setImageUrl(desktopUrl);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [desktopUrl, mobileUrl, smallMobileUrl]);

  return (
    <SectionContainer id="bio">
      <SectionBg>
        <StyledImage
          src={imageUrl}
          alt="description"
          $position="absolute"
          $width="100%"
          $height="auto"
          $top={0}
          $left={0}
          loading="lazy"
        />
      </SectionBg>
      <SectionWrapper>
        <FlexibleLayout $reverse={true}>
          <ArtistImgWrap>
            <StyledImage
              src={contentImageUrl}
              alt="Artist pretending to hold a weapon"
              $position="relative"
              $width="455px"
              $height="auto"
              $borderRadius="10px"
              $border="2px solid #ac94f4"
              $zIndex="10"
              loading="lazy"
            />
          </ArtistImgWrap>
          <TextWrapper className="">
            <Topline className="text-center">Approved Bam Bio</Topline>
            <Heading className="text-center">Gavin Di Fresco</Heading>
            <StyledText
              $fontSize="20px"
              $lineHeight="26px"
              $color="#fff"
              $marginTop="30px"
              $marginBottom="25px"
              $maxWidth="440px"
              $phoneFontSize="18px"
            >
              'Gavin Di Fresco, known professionally as Bamvsthewrld, is an
              American rapper, singer, and songwriter who shares his life
              experiences in his lyrics, inspiring others who can relate to the
              issues of his generation. Career highlights include a live
              performance at Innovative Academy prom in Hendersonville, NC, and
              a sold-out show in his home town of Brevard, NC.'
            </StyledText>
            <BtnWrap>
              <Button
                to="music"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                See More
                <ButtonIcon
                  icon={isHovered ? RocketIcon : ArrowIcon}
                  color={isHovered ? "#ac94f4" : "inherit"}
                />
              </Button>
            </BtnWrap>
          </TextWrapper>
        </FlexibleLayout>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default ArtistSection;