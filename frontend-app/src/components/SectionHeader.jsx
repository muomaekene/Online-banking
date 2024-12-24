import styled from "styled-components";

const SectionHeader = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>
    </Container>
  );
};

export default SectionHeader;

const Container = styled.div`
  padding: 20px 20px 10px 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-weight: 500;
    font-size: inherit;
  }
`;
