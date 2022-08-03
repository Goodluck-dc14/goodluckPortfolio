import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { animateScroll as scroll, Link } from "react-scroll";

const Header = ({ clr, good, textColor, iconColor }) => {
  return (
    <Container
      style={{
        backgroundColor: clr,
        borderBottom: good,
      }}
    >
      <Image
        src="img/g.png"
        alt="img"
        onClick={() => {
          scroll.scrollToTop();
        }}
      />
      <Wrapper style={{ color: textColor }}>
        <Link
          offset={-80}
          activeClass="active"
          to="Home"
          smooth={true}
          duration={1000}
        >
          <span>Home</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="About"
          smooth={true}
          duration={1000}
        >
          <span>About</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Services"
          smooth={true}
          duration={1000}
        >
          <span>Services</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Projects"
          smooth={true}
          duration={1000}
        >
          <span>Projects</span>
        </Link>
        <Link
          offset={-80}
          activeClass="active"
          to="Contact"
          smooth={true}
          duration={1000}
        >
          <span>Contact</span>
        </Link>
      </Wrapper>
      <Holder style={{ color: iconColor }}>
        <Menu
          onClick={() => {
            document.getElementById("nav").style.width = "200px";
          }}
        >
          <FiMenu />
        </Menu>
      </Holder>
      <Sidebar myId="nav" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  transition: all 1000ms;
  z-index: 1;
`;
const Image = styled.img`
  width: 15%;
  margin: 0 20px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 25%;
  }
  @media screen and (max-width: 425px) {
    width: 30%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  span {
    margin-right: 50px;
    font-size: 17px;
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1);
    font-weight: 400;

    @media screen and (max-width: 1024px) {
      margin-right: 50px;
    }
  }
`;

const Menu = styled(FiMenu)`
  cursor: pointer;
  font-size: 40px;
  margin-right: 30px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Holder = styled.div`
  @media screen and (min-width: 770px) {
    display: none;
  }
`;
