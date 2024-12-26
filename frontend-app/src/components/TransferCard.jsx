import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import styled from "styled-components";

const TransferCard = ({ title, desc, action, url }) => {
  return (
    <Container>
      <div className="content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

      <hr />
      <CustomLink to={url}>
        {action}
        <ChevronRightIcon width="15px" />
      </CustomLink>
    </Container>
  );
};

export default TransferCard;

const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  background: ${({ theme }) => theme.palette.main};
  padding: 20px;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: 5px;
  }

  p {
    color: ${({ theme }) => theme.palette.altText};
    margin-bottom: 20px;
  }

  hr {
    margin: -20px;
    border-color: ${({ theme }) => theme.palette.hr};
  }
`;

const CustomLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  color: ${({ theme }) => theme.palette.text};
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${({ theme }) => theme.palette.link};
    text-decoration: underline;
  }
`;
