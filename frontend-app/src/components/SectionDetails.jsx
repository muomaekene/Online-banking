import { Link } from "react-router-dom";

import styled from "styled-components";

const SectionDetails = ({ detail, icon, source }) => {
  return (
    <Container>
      <Link to={source}>
        <p className="details">
          <span>{detail}</span>
          {icon}
        </p>
      </Link>
    </Container>
  );
};

export default SectionDetails;

const Container = styled.div`
  .details {
    font-weight: 500;
    font-size: 13px;
    color: ${({ theme }) => theme.altText};
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      :hover {
        color: ${({ theme }) => theme.text};
      }
    }
  }
`;
