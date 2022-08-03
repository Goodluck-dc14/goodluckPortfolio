import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Container id="Home">
        <Wrapper></Wrapper>{" "}
        <TextHolder>
          {" "}
          <Text>My name is Goodluck Ogbonna And,</Text>
          <Text2> Am a Full-Stack Developer</Text2>
          <Button>Hire Me</Button>
        </TextHolder>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 45rem;
  background-image: url("/img/goody.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  opacity: 0.3;
`;

const TextHolder = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 200px;

  @media screen and (max-width: 1024px) {
    bottom: unset;
  }
  @media screen and (max-width: 1440px) {
    bottom: unset;
  }
`;
const Text = styled.div`
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 40px;
  max-width: 850px;
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    max-width: 600px;
    font-size: 30px;
  }
  @media screen and (max-width: 425px) {
    max-width: 400px;
    font-size: 30px;
  }
  @media screen and (max-width: 320px) {
    max-width: 400px;
    font-size: 25px;
  }
`;
const Text2 = styled.div`
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 40px;
  max-width: 850px;
  line-height: 1.2;
  color: rgba(54, 193, 87, 0.7);

  @media screen and (max-width: 1024px) {
    max-width: 600px;
    font-size: 30px;
  }
  @media screen and (max-width: 425px) {
    max-width: 400px;
    font-size: 30px;
  }
  @media screen and (max-width: 320px) {
    max-width: 400px;
    font-size: 25px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: rgba(54, 193, 87, 0.7);
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;
