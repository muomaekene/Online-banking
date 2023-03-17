import styled from "styled-components";

const ActionBtn = ({ icon, title }) => {
  return (
    <Button>
      {icon}
      {title}
    </Button>
  );
};

export default ActionBtn;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-size: 13px;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.palette.solid};
  color: ${({ theme }) => theme.palette.main};
  border-radius: 30px;
  font-family: inherit;

  :hover {
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.text};
    font-weight: 500;
  }
`;
