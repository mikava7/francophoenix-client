// LinkWithPreviousPath.js
import { Link, useLocation } from "react-router-dom";
import { SignLink } from "../../pages/User/Register";
const LinkWithPreviousPath = ({ to, children }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    sessionStorage.setItem("previousPath", location.pathname);
  };

  return (
    <SignLink to={to} onClick={handleLinkClick}>
      {children}
    </SignLink>
  );
};

export default LinkWithPreviousPath;
