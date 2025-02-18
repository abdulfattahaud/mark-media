export const calculateRem = () => {
  const clientWidth = document.documentElement.clientWidth;

  const baseWidth = 1920;
  const baseFontSize = 16;

  //   after 1440px, the font size gonna scale up
  const rem = (clientWidth / baseWidth) * baseFontSize;
  if (clientWidth > 1440) {
    document.documentElement.style.fontSize = `${rem}px`;
  } else {
    document.documentElement.style.fontSize = `${baseFontSize}px`;
  }
};
