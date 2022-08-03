import React from "react";
import styled from "styled-components";

const Abou = () => {
  return (
    <Container id="About">
      <NameHolder>
        <h1>
          ABOUT <span>ME</span>{" "}
        </h1>
      </NameHolder>
      <Wrapper>
        <Left>
          <Img src="/img/goody.jpg" />
        </Left>
        <Right>
          <TextHolder>
            <BigText>My Bio</BigText>
            <Text>
              Goodluck Ogbonna is a reliable employee and a MERN stack developer
              with proven experience in developing and designing frontend web
              architectures. Building and maintaining the server side of a web
              applications. Worked with development teams and managers to ideate
              software solutions. Has experience in developing, deploying and
              operating scalable services.
            </Text>
            <SecText>
              Strong understanding of industry trends and content management
              system, Skilled in multitasking and working on several projects
              simultaneously Unique ability to improvise, grasp new skills and
              troubleshoot problems, Experienced in communicating with creative
              team and clients, Very comfortable and passionate about adopting
              ideas and bringing them to life through technology, Well organized
              with the ability to prioritize task, Highly driven to meet
              deadline and Capability to work and flourish in a fastpaced
              environment.
            </SecText>
          </TextHolder>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Abou;

const Container = styled.div`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    padding-bottom: 40px;
    padding-top: 20px;
  }
`;

const NameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: rgb(52, 149, 74);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50%;
    align-items: center;
    justify-content: center;
    margin-right: unset;
  }
`;

const Img = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: unset;
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const TextHolder = styled.div``;

const BigText = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const Text = styled.div`
  margin-top: 20px;
  max-width: 450px;
  color: gray;
  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

const SecText = styled.div`
  margin-top: 20px;
  max-width: 450px;
  color: gray;
  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;
