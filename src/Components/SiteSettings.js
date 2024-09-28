import cv from '../readcv'; // Add this import

const siteSettings = {
  toolbarColor: "dark",
  soundtrack: {
    track: cv.media("soundtrack.mp3"),
    artwork: cv.media("soundtrack-cover.jpeg"),
    playerColor: "light",
  },
};

export default siteSettings;
