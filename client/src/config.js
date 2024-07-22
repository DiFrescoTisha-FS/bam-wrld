// src/config.js
export const logEnvVariables = () => {
  console.log('VITE_BACKEND_URL:', import.meta.env.VITE_BACKEND_URL);
  console.log('VITE_CLOUDINARY_NAME:', import.meta.env.VITE_CLOUDINARY_NAME);
  console.log('VITE_PROXY_URL:', import.meta.env.VITE_PROXY_URL);
  console.log('VITE_FRONTEND_URL:', import.meta.env.VITE_FRONTEND_URL);
  
  };
  