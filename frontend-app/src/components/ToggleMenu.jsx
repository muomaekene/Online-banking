import { devices as device } from "../utils/breakpoints";
import { Bars3Icon } from "@heroicons/react/24/outline";
import styled from "styled-components";

const ToggleMenu = () => {
  return (
    <Container>
      <Bars3Icon className="menu" />
    </Container>
  );
};

export default ToggleMenu;

const Container = styled.button`
  border: none;
  background: none;

  .menu {
    display: none;
    width: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text};

    @media ${device.laptop} {
      display: block;
      margin-right: 10px;
    }
  }
`;
