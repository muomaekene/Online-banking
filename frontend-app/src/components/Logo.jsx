import styled from "styled-components";
import firstFlorida from "../assets/images/firstFlorida.png";

const Logo = () => {
  return (
    <Cover>
      <img width="130" src={firstFlorida} alt="first florida logo" />
    </Cover>
  );
};

export default Logo;

const Cover = styled.div`
  object-fit: contain;
  height: 4rem;
`;
