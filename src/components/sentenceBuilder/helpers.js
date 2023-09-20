export const calculateNavbarHeight = (setNavbarHeight) => {
  const smallMobileBreakpoint = 376;
  const mobileBreakpoint = 576;
  const tabletBreakpoint = 768;
  const laptopBreakpoint = 968;

  if (window.innerWidth < smallMobileBreakpoint) {
    setNavbarHeight(6 * 16);
  } else if (window.innerWidth < mobileBreakpoint) {
    setNavbarHeight(7 * 16);
  } else if (window.innerWidth < tabletBreakpoint) {
    setNavbarHeight(7 * 16);
  } else if (window.innerWidth < laptopBreakpoint) {
    setNavbarHeight(10 * 16);
  } else {
    setNavbarHeight(13 * 16);
  }
};
