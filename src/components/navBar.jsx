import { useRef, useState } from 'react';
import { Space, Row, Col, Button } from 'antd';
import useScrollPercentage from '../hooks/scrollPercetage';
import useWindowsDimention from '../hooks/windowsDimention';
import { CSSTransition } from 'react-transition-group';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { NavHashLink  as Link } from 'react-router-hash-link';
import { slide as Menu } from "react-burger-menu";
import LogoPng from '../assets/logo.png';
import '../styles/navBar.scss';

const NavBar = () => {
  const nodeRef = useRef(null);
  const scrollPercentage = useScrollPercentage();
  const { isMobile } = useWindowsDimention();
  const [menuOpen, setMenuOpen] = useState(false);
  const isBigLogoVisible = scrollPercentage > 20;
  
  return (
    <div  className="layoutHeader">
      {
        isMobile && 
        <Menu 
          width="100%"
          customBurgerIcon={<MenuOutlined onClick={() => setMenuOpen(true)} className="openMenuButton" />}
          customCrossIcon={<CloseOutlined onClick={() => setMenuOpen(false)} className="closeMenuButton" />}
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)} 
          onOpen={() => setMenuOpen(true)}
        >
          <Space style={{ margin: "15px 10px 15px 0", textAlign: "center" }} onClick={() => setMenuOpen(false)}>
            <Link to="/#home"><Button className="navButton bm-item" size="large">Home</Button></Link>
            <Link to="/#services"><Button className="navButton" size="large">Services</Button></Link>
            <Link to="/#about"><Button className="navButton" size="large">About Us</Button></Link>
            <Link to="/#contact"><Button className="contactUsButton" size="large">Contact Us</Button></Link>
          </Space>
        </Menu>
      } 
      <Row>
        <Col flex={2} />
        <CSSTransition nodeRef={nodeRef} in={isBigLogoVisible} timeout={200} classNames="rightToLeftFade" unmountOnExit>
          <Col flex={10}>
            <div ref={nodeRef}>
              <Link to="/#home">
                <img src={LogoPng} alt="Logo" className="logo" />
              </Link>
            </div>
          </Col>
        </CSSTransition>
        <Col flex={2} hidden={isMobile}>
          <Space style={{ margin: "15px 10px 15px 0" }} >
            <Link to="/#home"><Button className="navButton" size="large">Home</Button></Link>
            <Link to="/#services"><Button className="navButton" size="large">Services</Button></Link>
            <Link to="/#about"><Button className="navButton" size="large">About Us</Button></Link>
            <Link to="/#contact"><Button className="contactUsButton" size="large">Contact Us</Button></Link>
          </Space>
        </Col>
        <CSSTransition nodeRef={nodeRef} in={isBigLogoVisible} timeout={200} classNames="rightToLeftFade" unmountOnExit>
          <Col flex={2} />
        </CSSTransition>
      </Row>
    </div>
  );
};

export default NavBar