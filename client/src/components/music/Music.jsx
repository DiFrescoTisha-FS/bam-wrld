import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import useCloudinary from '../../hooks/useCloudinary';
import {
  SectionContainer,
  SectionBg,
  SectionWrapper,
  FlexibleLayout,
  TextWrapper,
  ImgWrap,
  BtnWrap,
  Button,
  ButtonIcon,
  StyledText,
  Music,
  ResponsiveImage,
  Topline,
  Heading,
} from "../StyledComponents";

const MusicSection = memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const cloudinaryInstance = useCloudinary();

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image('MUSICBG_2_zy5clw').toURL({
      transformation: [
        { width: 1920, height: 1600, crop: 'fill' },
        { quality: 'auto:good' },
        { fetch_format: 'auto' }
      ]
    });
  }, [cloudinaryInstance]);

  const mobileUrl = useMemo(() => {
    return cloudinaryInstance.image('case3_hzwjek').toURL({
      transformation: [
        { width: 480, height: 800, crop: 'fill' },
        { quality: 'auto' },
        { fetch_format: 'auto' }
      ]
    });
  }, [cloudinaryInstance]);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 480) {
      setImageUrl(mobileUrl);
    } else {
      setImageUrl(desktopUrl);
    }
  }, [desktopUrl, mobileUrl]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <SectionContainer id="music">
      <SectionBg>
        <ResponsiveImage
          $desktopUrl={desktopUrl}
          $mobileUrl={mobileUrl}
          src={imageUrl}
          alt="Planets"
        />
      </SectionBg>
      <SectionWrapper>
        <FlexibleLayout $reverse={false}>
          <ImgWrap>
            <Music>
              <iframe
                title="iframe"
                width="100%"
                height="450px"
                allow="autoplay"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1761927219&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>
            </Music>
          </ImgWrap>
          <TextWrapper>
              <Topline className="text-center">
                Bam Beats
              </Topline>
              <Heading className="text-center">
                SoundCloud Playlist
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
              SoundCloud is the number one platform used by Bam fans. You can
              stay up to date with the latest events and music media produced
              by Trapstar.
            </StyledText>
            <BtnWrap>
              <Button
                to="new"
                smooth={true}
                $duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {"Continue"}&nbsp;&nbsp;
                <ButtonIcon $hover={isHovered} />
              </Button>
            </BtnWrap>
          </TextWrapper>
        </FlexibleLayout>
      </SectionWrapper>
    </SectionContainer>
  );
});

export default MusicSection;
