import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navlink = ({ icon, text, to }) => {
  return (
    <Link to={to} className="sidebar-link">
      <FontAwesomeIcon icon={icon} className="nav-link"></FontAwesomeIcon>
      <span className="sidebar-tooltip">{text}</span>
    </Link>
  );
};

export default Navlink;
