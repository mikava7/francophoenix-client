export const measureTextWidth = (text) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = context.measureText(text).width;
  canvas.remove();
  return width;
};
export const playAudio = (audioUrl) => {
  const audio = new Audio(audioUrl);
  audio.play();
};
export const decodeUrl = (url) => {
  return decodeURIComponent(url);
};
