const baseWidth = 1334;
const baseHeight = 750;

export default () => {
  const docEl = document.documentElement;

  // set size for root element
  function resetRoot() {
    const imax = window.innerWidth;
    docEl.style.fontSize = `${(imax / baseWidth) * 100}px`;
    docEl.style.width = `${imax}px`;
  }
  resetRoot();
  window.addEventListener('resize', resetRoot);
};
