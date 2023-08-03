import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollToTopOnRouteChange;
