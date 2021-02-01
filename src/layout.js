const baseWidth = 1334;
const baseHeight = 750;
const baseRatio = baseWidth / baseHeight;

export default () => {
  const docEl = document.documentElement;

  // set size for root element
  function resetRoot() {
    const imax = Math.max(window.innerHeight, window.innerWidth);
    const imin = Math.min(window.innerHeight, window.innerWidth);
    const clientRatio = imax / imin;
    // set root font size for rem
    let fontSize;
    if (clientRatio > baseRatio) {
      fontSize = (imin / baseHeight) * 100;
    } else {
      fontSize = (imax / baseWidth) * 100;
    }
    docEl.style.fontSize = `${fontSize}px`;
    docEl.style.height = `${imin}px`;
    docEl.style.width = `${imax}px`;
  }
  resetRoot();
  window.addEventListener('orientationchange', resetRoot);
  window.addEventListener('resize', resetRoot);
};
