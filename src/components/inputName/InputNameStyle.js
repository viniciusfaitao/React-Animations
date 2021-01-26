import styled from "styled-components";

export const BackgroundPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(180deg, #05f, #09f);
`;

export const BackgroundInput = styled.form`
  width: 350px;
  height: 335px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(39, 39, 39);
  border-radius: 5px;

  h2 {
    margin: 0px 50px 50px 50px;
    text-align: center;
    color: white;
    font-weight: 300;
  }
`;

export const InputStyle = styled.input`
  font-size: 20px;
  height: 40px;
  width: 292px;
  padding-left: 10px;
  border-radius: 5px;
  border: none;
  outline: 0;

  &:invalid {
    border-color: red;
  }

  &:required:valid {
    background: url("https://assets.digitalocean.com/labs/icons/hand-thumbs-up.svg")
      no-repeat 95% 50% white;
    background-size: 25px;
  }
`;

export const ButtonStyle = styled.button`
  height: 40px;
  width: 303px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 5px;
  border: none;
  background: linear-gradient(180deg, #05f, #09f);
  font-size: 18px;
  color: white;
  outline: 0;
  cursor: pointer;
  transition: 600ms ease-in-out;
  cursor: pointer;

  :disabled {
    background: ${`linear-gradient(180deg,#0055ff4d,#0099ff54)`};
    opacity: 0.5;
    cursor: no-drop;
  }
`;
