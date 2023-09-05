// helpers/scrollToContainer.js

export const scrollToContainer = (containerRef, scrollOffset) => {
  if (!containerRef || !containerRef.current) {
    return;
  }

  const scrollPosition = containerRef.current.offsetTop - scrollOffset;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
};
