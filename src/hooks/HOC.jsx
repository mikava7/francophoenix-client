import { useState, useEffect } from "react";

const useScrollHandler = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // If the user scrolls up or if they are at the top of the page, show the navbar
    setIsScrolled(currentScrollPos <= prevScrollPos || currentScrollPos === 0);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
};

export default useScrollHandler;
