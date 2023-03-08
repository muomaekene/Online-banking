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
  padding: 10px 20px;
  font-size: 13px;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.solid};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.main};
  border-radius: 30px;
  font-family: inherit;

  :hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.primary};
    font-weight: 500;
  }
`;
