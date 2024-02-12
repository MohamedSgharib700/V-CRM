import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import profileimg from "../../../assets/images/profileimg.svg";
import Container from "react-bootstrap/Container";
import "./Navbar.scss";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-4">
      <Container>
        <h5>
          حياك، <span>عبدالله الشهري.</span>
        </h5>
        <div className="dropdown-profile">
          {" "}
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <img src={profileimg} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                ---
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">{i18n.language}</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeLanguage("en")}>
              en
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("ar")}>
              ar
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </nav>
  );
};

export default Navbar;
