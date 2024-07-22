import React, { useMemo } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { BsSnapchat, BsSpotify } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll/modules";
import { IconContext } from "react-icons";
import { generateImageUrl } from '../../utils/cloudinarySetup';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  SocialMediaIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  PrivacyTermsContainer
} from "./FooterElements";
import ContactInfo from "../contactinfo/ContactInfo";
import PrivacyLink from "../PrivacyLink";
import TermsLink from "../TermsLink";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const logoUrl = useMemo(() => generateImageUrl('logo_qkgu64', {
    width: 60,
    height: 60,
    gravity: 'center',
    crop: 'thumb',
    format: 'auto',
    quality: 'auto',
    secure: true,
  }), []);

  return (
    <IconContext.Provider value={{ color: "#ac94f4" }}>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia id="social media">
            <SocialMediaWrap>
              <SocialMediaLogo to="/" onClick={toggleHome}>
                <SocialMediaIcon src={logoUrl} alt="logo" />
              </SocialMediaLogo>

              <ContactInfo />
              <WebsiteRights>
                Bamvsthewrld © {new Date().getFullYear()} All rights reserved
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.instagram.com/trapstar_bam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.youtube.com/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.spotify.com/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify"
                >
                  <BsSpotify />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.snapchat.com/add/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SnapChat"
                >
                  <BsSnapchat />
                </SocialIconLink>
                <SocialIconLink
                  href="//soundcloud.com/trapstarbam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SoundCloud"
                >
                  <FaSoundcloud />
                </SocialIconLink>
              </SocialIcons>
              <PrivacyTermsContainer>
                <PrivacyLink />
                <TermsLink />
              </PrivacyTermsContainer>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </IconContext.Provider>
  );
};

export default Footer;
