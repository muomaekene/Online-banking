import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const NavigationBtn = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <ChevronLeftIcon width="18px" />
      {children}
    </Button>
  );
};

export default NavigationBtn;

const Button = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  width: fit-content;
  font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
  background: none;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.palette.border};
  }
`;
