import React from "react";
import styled from "styled-components";
import TOpProp from "./TOpProp";

const Service = () => {
  return (
    <Container id="Services">
      <NameHolder>
        <h1>SERVICES</h1>
      </NameHolder>
      <Top>Tools I Use</Top>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eo et accusam et justo duo
      </Text>
      <Cards>
        <TOpProp image="/img/react.png" head="react" number="27" />
        <TOpProp image="/img/nodejs.png" head="Node" number="15" />
        <TOpProp image="/img/firebase.png" head="firebase" number="20" />
        <TOpProp image="/img/mongodb.png" head="mongoDB atlas" number="10" />
        <TOpProp image="/img/nextjs.png" head="next JS" number="5" />
        <TOpProp image="/img/docker.png" head="Docker" number="20" />
        <TOpProp image="/img/css.png" head="Css" number="70" />
        <TOpProp image="/img/js.png" head="javascript" number="19" />
        <TOpProp image="/img/adobe-xd.svg" head="AdobeXd" number="40" />
        <TOpProp image="/img/github.svg" head="Github" number="100" />
        <TOpProp
          image="/img/vscode.png"
          head="Visual-Studio-Code"
          number="100"
        />
      </Cards>
    </Container>
  );
};

export default Service;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9px;
`;

const NameHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  max-width: 650px;
  margin-top: 30px;
  font-size: 20px;
  color: #707070;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
`;

const Cards = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

const Top = styled.div`
  color: #fdbd05;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;
