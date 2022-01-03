import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.theme === "light" ? "#1a5f7a" : "#fff89a")};
  background-color: ${(props) =>
    props.theme === "light" ? "#fff89a" : "#1a5f7a"};
  /* color: #1a5f7a; */
  font-size: larger;
  /* background-color: #fff89a; */
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const H1 = styled.h1`
  color: red;
  background-color: aliceblue;
  text-align: center;
`;

export const Div = styled.div`
  background-color: black;
  height: 200px;
  justify-content: center;
  margin: auto;
  /* color: white; */
  & :nth-child(1) {
    text-align: center;
    height: 100px;
    /* margin: auto; */
    color: green;
  }
  & :nth-child(2) {
    text-align: center;
    color: #80006f;
    font-size: larger;
  }
  & > p:hover {
    cursor: pointer;
    color: red;
  }
`;
