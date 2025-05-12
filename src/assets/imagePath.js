const images = import.meta.glob("./*.{png,jpg,jpeg,svg,webp}", { eager: true });

// Convert to named exports and preload immediately
const imageMap = Object.entries(images).reduce((acc, [key, value]) => {
  const imageName = key.replace("./", "").split(".")[0];
  acc[imageName] = value.default;

  // Preload the image immediately
  new Image().src = value.default;

  return acc;
}, {});

export default imageMap;
