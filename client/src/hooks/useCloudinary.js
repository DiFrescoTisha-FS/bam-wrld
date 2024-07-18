import { Cloudinary } from '@cloudinary/url-gen';

const useCloudinary = () => {
  const cloudinaryInstance = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
    },
  });

  return cloudinaryInstance;
};

export default useCloudinary;
