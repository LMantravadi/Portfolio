export const getImageUrl = (path) => {
  const baseUrl = import.meta.url.replace(/\/src\/.*/, "/");
  return new URL(`assets/${path}`, baseUrl).href;
};
