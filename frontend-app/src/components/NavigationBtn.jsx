import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const NavigationBtn = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <ArrowLeftIcon width="18px" />
      Back
    </Button>
  );
};

export default NavigationBtn;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  color: ${({ theme }) => theme.palette.text};
  background: none;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.palette.border};
    color: ${({ theme }) => theme.palette.link};
  }
`;
