import React from "react";
import styled from "styled-components";

const TOpProp = ({ image, head, number }) => {
  return (
    <Container>
      <Img src={image} />
      <Cover className="cover">
        <Text>
          <Head>{head}</Head>
          <Pro>Projects done: {number}</Pro>
        </Text>
      </Cover>
    </Container>
  );
};

export default TOpProp;

const Container = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border: 1px solid rgba(54, 193, 87, 0.5);
  position: relative;
  :hover > .cover {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const Cover = styled.div`
  width: 0;
  height: 100%;
  background: rgba(54, 193, 87, 0.7);
  position: absolute;
  transition: 350ms;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
`;

const Text = styled.div`
  text-align: center;
`;

const Head = styled.div`
  font-family: "Pacifico", cursive;
  font-size: 30px;
  text-transform: capitalize;
`;

const Pro = styled.div`
  font-weight: 600;
`;
