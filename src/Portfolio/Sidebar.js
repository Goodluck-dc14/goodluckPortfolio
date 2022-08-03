import React from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import { animateScroll as scroll, Link } from "react-scroll";

const Sidebar = ({ myId, iconColors }) => {
  return (
    <Container id={myId}>
      {" "}
      <Icons style={{ color: iconColors }}>
        {" "}
        <ImCancelCircle
          onClick={() => {
            document.getElementById(myId).style.width = "0";
          }}
        />
      </Icons>
      <Wrapper>
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
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 200vh;
  width: 0;
  background-color: rgb(52, 149, 74);
  position: fixed;
  right: 0;
  transition: 350ms;
  top: 0;
`;

const Wrapper = styled.div`
  color: white;
  height: 400px;
  width: 250px;
  background-color: rgb(52, 149, 74);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  cursor: pointer;
  span {
  }
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  cursor: pointer;
  font-size: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
