import styled from "styled-components";

export const NavbarBackground = styled.nav`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  place-content: space-between;

  span {
    margin-left: 16px;
  }

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 300px;
    z-index: 1;
    background: linear-gradient(60deg, #05f, #09f);
  }

  button {
    width: 80px;
    height: 80px;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    border-radius: 50%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      z-index: 1;
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
    z-index: 1;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 25px;

    &:hover {
      box-shadow: 0px 1px 10px black;
      border-radius: 10px;
    }

    a {
      color: white;
      background: none;
    }
  }
`;

export const IconPlaceholder = styled.div`
  flex: 40px 0;
  margin: 20px;
  color: black;
  display: inline-block;
`;

export const TextPlaceholder = styled.div`
  border-radius: 5px;
  flex: 1;
  color: white;
  display: inline-block;
`;

export const TextName = styled.div`
  display: inline-flex;
  align-items: center;
  color: white;
  margin-right: 20px;
  white-space: pre;
`;
