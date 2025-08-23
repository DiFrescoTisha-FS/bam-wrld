import { Cloudinary } from '@cloudinary/url-gen';

const useCloudinary = () => {
  const cloudinaryInstance = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
  });

  return cloudinaryInstance;
};

export default useCloudinary;
