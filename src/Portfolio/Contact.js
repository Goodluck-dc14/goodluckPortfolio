import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BiSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setUser_name(e.target.value);
  };

  const handleEmail = (e) => {
    setUser_email(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjv8ak3",
        "template_4328bfv",
        form.current,
        "user_WzrJQAzWRsuZcZwJrSHpK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUser_name("");
    setUser_email("");
    setMessage("");

    console.log("handleSubmit");
  };

  return (
    <Container id="Contact">
      <NameHolder>
        <h1>
          CONTACT <span>ME</span>{" "}
        </h1>
      </NameHolder>
      <ColorBackg></ColorBackg>
      <Wrapper>
        <Left>
          <h1>Let's talk</h1>
          <h4>Ask us anything or just say hi...</h4>
          <InfoCont>
            <InfoItem>
              <Icon>
                <AiFillPhone />
              </Icon>
              +2348056785434
            </InfoItem>
            {/* <InfoItem>
              <Icon>
                <AiTwotoneMail />
              </Icon>
              goodlucksamson520@gmail.com
            </InfoItem> */}
            <InfoItem>
              <Icon>
                <HiLocationMarker />
              </Icon>
              Lagos, Nigeria
            </InfoItem>
          </InfoCont>
        </Left>
        <Right>
          <Form ref={form} onSubmit={handleSubmit}>
            <FormHolder>
              <input
                type="text"
                placeholder="What's your name"
                name="user_name"
                value={user_name}
                onChange={handleName}
                required
              />
              <input
                type="text"
                placeholder="Type your email"
                name="user_email"
                value={user_email}
                onChange={handleEmail}
                required
              />
            </FormHolder>
            <textarea
              rows="5"
              placeholder="Input message"
              name="message"
              value={message}
              onChange={handleMessage}
              required
            />
            <Button type="submit">
              Send <BiSend />
            </Button>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 100%;
  min-height: 80vh;
  padding-top: 30px;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    height: 100%;
    min-height: 100vh;
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

const ColorBackg = styled.div`
  width: 20px;
  height: 70%;
  border-radius: 0 5px 5px 0;
  background-color: rgba(54, 193, 87, 0.7);
  position: absolute;
  @media screen and (max-width: 768px) {
    height: 83%;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  /* background-color: blue; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 50px;
  }
`;
const Left = styled.div`
  flex: 0.5;
  /* background-color: red; */
  h1 {
    line-height: 10px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
const Right = styled.div`
  flex: 0.5;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
`;

const InfoCont = styled.div`
  margin-top: 70px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-weight: 300;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  textarea {
    width: 100%;
    margin: 10px 0px;
    font-size: 14px;
    padding-left: 10px;
    resize: none;
    @media screen and (max-width: 768px) {
      width: 80%;
    }
    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(54, 193, 87, 0.7);
  height: 40px;
  width: 100px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  border: none;
`;

const FormHolder = styled.div`
  display: flex;
  input {
    width: 50%;
    height: 50px;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px 0px;
    font-size: 14px;
    padding-left: 10px;
    margin-right: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 135px;
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 150%;
    flex-direction: column;
  }
`;
