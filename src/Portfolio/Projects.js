import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container id="Projects">
      <NameHolder>
        <h1>
          {" "}
          MY <span>PROJECTS</span>{" "}
        </h1>
      </NameHolder>

      <Project>
        <a href="http://distress-cl.herokuapp.com/">
          <ImageCont>
            <img src="/img/distress.png" />
            <ImageOverlay>
              <Title>Distress</Title>
              <Description>Distress App</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://udemekitchen.herokuapp.com/">
          <ImageCont>
            <img src="/img/udeme.png" />
            <ImageOverlay>
              <Title>Udeme Kitchen</Title>
              <Description>A food ordering application</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://codelab-home.web.app/">
          <ImageCont>
            <img src="/img/codelab.png" />
            <ImageOverlay>
              <Title>CodeLab</Title>
              <Description>CodeLab official platform</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://ajegunle-developers.web.app/">
          <ImageCont>
            <img src="/img/data.png" />
            <ImageOverlay>
              <Title>Data Collection App</Title>
              <Description>AJ developers database</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://schoolproject-e54ac.web.app/">
          <ImageCont>
            <img src="/img/Teens.png" />

            <ImageOverlay>
              <Title>Teens Project</Title>
              <Description>A cloned learning app</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://elisha-foundation.web.app/">
          <ImageCont>
            <img src="/img/elisha.png" />
            <ImageOverlay>
              <Title>Elisha Foundation</Title>
              <Description>A platform for an NGO</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://security-dev-project.web.app/">
          <ImageCont>
            <img src="/img/secure.png" />
            <ImageOverlay>
              <Title>A Security App</Title>
              <Description>A community report app</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://silver-quest-296801.web.app/">
          <ImageCont>
            <img src="/img/great.png" />
            <ImageOverlay>
              <Title>Great Shepherd</Title>
              <Description>A university web app</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://lotsngo.web.app/">
          <ImageCont>
            <img src="/img/lots.png" />
            <ImageOverlay>
              <Title>Lots Foundation</Title>
              <Description>A charity organisations web app</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
        <a href="https://utacngo.web.app/">
          <ImageCont>
            <img src="/img/utac.png" />
            <ImageOverlay>
              <Title>UTAC</Title>
              <Description>An NGO platform</Description>
            </ImageOverlay>
          </ImageCont>
        </a>
      </Project>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  span {
    color: rgb(52, 149, 74);
  }
`;

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImageCont = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  margin: 20px;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  cursor: pointer;
  > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover > * {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.25em;
  margin-top: 0.25em;
`;
