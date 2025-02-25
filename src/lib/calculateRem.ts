export const calculateRem = () => {
  const clientWidth = document.documentElement.clientWidth;

  const baseWidth = 1920;
  const baseFontSize = 16;

  //   after 1440px, the font size gonna scale up
  const rem = (clientWidth / baseWidth) * baseFontSize;
  if (clientWidth > 992) {
    document.documentElement.style.fontSize = `${rem}px`;
    document.documentElement.setAttribute("loaded", "true");
  } else {
    document.documentElement.style.fontSize = `${baseFontSize}px`;
  }

  // const vh = window.innerHeight * 0.01;
  // document.documentElement.style.setProperty("--vh", `${vh}px`);
};
