import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CancelBtn = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>Cancel</Button>;
};

export default CancelBtn;

const Button = styled.button`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.text};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};

  :hover {
    background: ${({ theme }) => theme.palette.secondary};
    border: 1px solid ${({ theme }) => theme.palette.border};
  }
`;
