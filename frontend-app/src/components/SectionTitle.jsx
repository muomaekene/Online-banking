import styled from "styled-components";

const SectionTitle = ({ title, details }) => {
  return (
    <Container>
      <h3 className="title-header">{title}</h3>
      <div>{details}</div>
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  .title-header {
    font-size: 14px;
    font-weight: 500;
  }
`;
