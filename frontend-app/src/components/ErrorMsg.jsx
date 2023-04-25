import styled from "styled-components";

const ErrorMsg = ({ message }) => {
  return <Container>{message}</Container>;
};

export default ErrorMsg;

const Container = styled.p`
  color: #e64848;
  font-size: 12px;
  padding: 5px;
`;
