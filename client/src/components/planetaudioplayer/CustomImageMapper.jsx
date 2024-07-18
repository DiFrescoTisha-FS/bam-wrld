import React from 'react';
import ImageMapper from 'react-img-mapper';

const CustomImageMapper = ({
  src = '',
  map = { name: '', areas: [] },
  width = 100,
  height = 100,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  fillColor = 'transparent',
  ...rest
}) => {
  return (
    <ImageMapper
      src={src}
      map={map}
      width={width}
      height={height}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      fillColor={fillColor}
      {...rest}
    />
  );
};

export default CustomImageMapper;
