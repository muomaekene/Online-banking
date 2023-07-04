import styled from "styled-components";

const PageTitle = ({ children }) => {
  return <Text>{children}</Text>;
};

export default PageTitle;

const Text = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 10px;
`;
