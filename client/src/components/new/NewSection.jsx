import React, { useMemo, useState } from "react";
import {
  SectionBg,
  Button,
  IconWrap,
  ButtonIcon,
  SectionContainer
} from "../StyledComponents";
import {
  NewWrapper,
  TopLine,
  Heading,
  TextWrapper,
  Subtitle,
  CenterVideo,
  VideoContainer,
  StyledReactPlayer,
  ResponsiveSectionBg,
  BtnWrap,
} from "./NewElements";
import useCloudinary from "../../hooks/useCloudinary";

const NewSection = () => {
  const [hover, setHover] = useState(false);

  const cloudinaryInstance = useCloudinary();

  const desktopUrl = useMemo(() => {
    return cloudinaryInstance.image("NEWD_xzlbos").toURL({
      transformation: [
        { width: 1920, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const largeTabletUrl = useMemo(() => {
    return cloudinaryInstance.image("case3_hzwjek").toURL({
      transformation: [
        { width: 1024, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const tabletUrl = useMemo(() => {
    return cloudinaryInstance.image("case3_hzwjek").toURL({
      transformation: [
        { width: 600, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const mobileUrl = useMemo(() => {
    return cloudinaryInstance.image("case3_hzwjek").toURL({
      transformation: [
        { width: 386, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const smallMobileUrl = useMemo(() => {
    return cloudinaryInstance.image("case3_hzwjek").toURL({
      transformation: [
        { width: 300, crop: "scale" },
        { quality: "auto:good" },
        { fetch_format: "auto" },
      ],
    });
  }, [cloudinaryInstance]);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionContainer id="new">
      <SectionBg>
        <ResponsiveSectionBg
          $desktopUrl={desktopUrl}
          $largeTabletUrl={largeTabletUrl}
          $tabletUrl={tabletUrl}
          $mobileUrl={mobileUrl}
          $smallMobileUrl={smallMobileUrl}
        />
      </SectionBg>
      <NewWrapper style={{ zIndex: "20" }}>
        <TopLine>New Release</TopLine>
        <Heading>Higher Power</Heading>
        <CenterVideo>
          <VideoContainer>
            <StyledReactPlayer
              loading="lazy"
              width="100%"
              height="100%"
              controls={true}
              url="https://youtu.be/GriWw3Sk6Bk"
            />
          </VideoContainer>
        </CenterVideo>
        <TextWrapper>
          <Subtitle>
            The official Music video, "Message to God", is now available on
            YouTube.
          </Subtitle>
        </TextWrapper>
        <BtnWrap>
          <Button
            to="thoughts"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Continue
            <IconWrap>
              <ButtonIcon hover={hover} />
            </IconWrap>
          </Button>
        </BtnWrap>
      </NewWrapper>
    </SectionContainer>
  );
};

export default NewSection;
