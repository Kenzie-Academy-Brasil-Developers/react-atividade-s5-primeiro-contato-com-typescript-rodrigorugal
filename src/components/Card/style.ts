import styled from "styled-components";

export const BoxItem = styled.li`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  width: 150px;
  height: 250px;
  padding: 10px;
  background-color: #e3e;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    width: 100%;
    font-size: 23px;
  }
  h3 {
    width: 100%;
    font-size: 17px;
  }
  .boxHobby {
    width: 100%;
    height: 120px;
    background-color: lightblue;

    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      font-weight: 400;
      text-decoration: underline;
    }

    p {
      width: 100%;
    }
  }
`;
