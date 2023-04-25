import { useState } from "react";
import { MoreHoriz } from "@mui/icons-material";

import styled from "styled-components";

const More = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Cover onClick={handleClick}>
      <MoreHoriz style={{ fontSize: "17px" }} />
    </Cover>
  );
};

export default More;

const Cover = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  :hover {
    height: 20px;
    width: 20px;
    background: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.text};
  }
`;
