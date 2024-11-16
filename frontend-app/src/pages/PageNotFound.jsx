import { Link } from "react-router-dom";

import styled from "styled-components";

const PageNotFound = () => {
  return (
    <Container>
      <h1 className="title">
        404 <br />
        page not found
      </h1>
      <h2 className="subtitle">
        <span className="ascii">(╯°□°）╯︵ ┻━┻</span>
      </h2>
      <Link to="/overview">Go back home</Link>
    </Container>
  );
};

export default PageNotFound;

const Container = styled.div`
  font-family: "Product Sans", Roboto, sans-serif;
  height: 100vh;
  width: 100vw;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 45px;
    margin: 0;
    font-weight: 700;
    text-align: center;
  }
  .subtitle {
    font-size: 30px;
  }
`;
