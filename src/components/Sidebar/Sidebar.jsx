import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Navlink from "../Navlink";

const Sidebar = () => {
  const urls = {
    linkedin: "https://www.linkedin.com/in/ldavidrh/",
    instagram: "https://www.instagram.com/ld.res/",
    github: "https://github.com/ldavidrh",
  };

  return (
    <div className="h-screen flex flex-col w-16 bg-oxford-blue absolute top-0 left-0 text-platinum">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="p-2 hover:rotate-180 hover:hue-rotate-90 transition-all ease-out"
        />
      </Link>

      <div className="h-full flex flex-col">
        <nav className="nav">
          <Navlink text={"Home"} icon={faHome} to={"/"}></Navlink>
          <Navlink text={"About me"} icon={faUser} to={"about/"}></Navlink>
          <Navlink text={"Contact me"} icon={faEnvelope} to={"contact/"}></Navlink>
        </nav>
        <div className="media-container">
          <a
            href={urls.instagram}
            target="_blank"
            rel="noreferrer"
            className="media-link"
          >
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a
            href={urls.github}
            target="_blank"
            rel="noreferrer"
            className="media-link"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a
            href={urls.linkedin}
            target="_blank"
            rel="noreferrer"
            className="media-link"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
