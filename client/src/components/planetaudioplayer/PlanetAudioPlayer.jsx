import React, { useRef, useState, useEffect } from 'react';
import CustomImageMapper from './CustomImageMapper'; // Updated import
import { PlanetMapWrapper } from './PlanetMapWrapperElements';
import Tooltip from '../tooltip/Tooltip';

const PlanetAudioPlayer = ({ image, mapAreas, onSongEnd }) => {
  const audioPlayer = useRef();
  const [currentPlaying, setCurrentPlaying] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const mapWrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onAreaClicked = (area) => {
    if (currentPlaying === area.href) {
      setIsPlaying(!isPlaying);
    } else {
      if (currentPlaying && isPlaying) {
        audioPlayer.current.pause();
      }
      audioPlayer.current.src = area.href;
      setCurrentPlaying(area.href);
      setIsPlaying(true);
    }
  };

  const onAreaEnter = (area) => {
    const [x, y, radius] = area.coords;
    setTooltip(area.title);
    const offsetX = -50;
    const offsetY = -20;
    setTooltipPos({
      left: x + offsetX,
      top: y - radius + offsetY,
    });
  };

  const onAreaLeave = () => {
    setTooltip("");
    setTooltipPos({ top: 0, left: 0 });
  };

  useEffect(() => {
    const audioEl = audioPlayer.current;
    
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }

    const handleSongEnd = () => {
      setCurrentPlaying("");
      setIsPlaying(false);
      if (onSongEnd) {
        onSongEnd();
      }
    };

    audioEl.addEventListener("ended", handleSongEnd);

    return () => {
      audioEl.removeEventListener("ended", handleSongEnd);
    };
  }, [isPlaying, currentPlaying, onSongEnd]);

  if (!mapAreas || !mapAreas.areas) {
    console.error('mapAreas is undefined or not structured correctly:', mapAreas);
    return null;
  }

  return (
    <div>
      <PlanetMapWrapper ref={mapWrapperRef}>
        <CustomImageMapper
          src={image}
          map={{ name: 'thoughts-map', areas: mapAreas.areas }}
          onClick={onAreaClicked}
          onMouseEnter={onAreaEnter}
          onMouseLeave={onAreaLeave}
          width={1779}
          height={860}
          fillColor="transparent"
        />
        {tooltip && (
          <Tooltip top={tooltipPos.top} left={tooltipPos.left} show={tooltip !== ""}>
            {tooltip}
          </Tooltip>
        )}
      </PlanetMapWrapper>
      <audio ref={audioPlayer} preload="metadata" />
    </div>
  );
};

export default PlanetAudioPlayer;
