import React, { useContext, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Langc } from '../mycontexte/Langcontext.js';
import Imes from "../assets/spain.svg";
import Imfr from "../assets/france.svg";
import Logo from "./Logo_ofppt-removebg-preview.png";

export default function CustomNavbar() {
  const { t, i18n } = useTranslation();
  const { lang, setLang } = useContext(Langc);
  const linkStyle = {
    color: '#ffe0b2',
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '0 20px',
    textDecoration: 'underline',
    textDecorationColor: '#ffe0b2',
    
  };
  const navbarStyle = {
    backgroundColor: 'gray',
    margin: 'auto',
  };
  const mobileNavbarStyle = {
    backgroundColor: 'gray',
    margin: 'auto',
    flexDirection: 'column',
  };
  const brandStyle = {
    marginLeft: '15px',
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <BootstrapNavbar collapseOnSelect expand="lg" style={window.innerWidth >= 768 ? navbarStyle : mobileNavbarStyle}>
       <BootstrapNavbar.Brand style={brandStyle}>
        <img
          src={Logo}
          width="60"
          height="60"
          alt="Logo"
          className="d-inline-block align-top"
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BootstrapNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="nav-link font-weight-bold" style={linkStyle}>
            {t('Home')}
          </Nav.Link>
          <Nav.Link as={Link} to="/Calc" className="nav-link font-weight-bold" style={linkStyle}>
            {t('Calculator')}
          </Nav.Link>
          <Nav.Link as={Link} to="/Todolist" className="nav-link font-weight-bold" style={linkStyle}>
            {t('To Do List')}
          </Nav.Link>
          <Nav.Link as={Link} to="/Slider" className="nav-link font-weight-bold" style={linkStyle}>
            {t('Slider')}
          </Nav.Link>
          <Nav.Link as={Link} to="/Api" className="nav-link font-weight-bold" style={linkStyle}>
            {t('Api')}
          </Nav.Link>
          <Nav.Link as={Link} to="/Multilangue" className="nav-link font-weight-bold" style={linkStyle}>
            {t('Multilangue')}
          </Nav.Link>
          <Nav.Link as={Link} to="*" className="nav-link font-weight-bold" style={linkStyle}>
            {t('others')}
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}
