import { ChevronRightIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const TransferCard = ({ title, desc, action }) => {
  return (
    <Container>
      <div className="content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

      <hr />
      <button>
        {action}
        <ChevronRightIcon width="15px" />
      </button>
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

  button {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      border: 1px solid ${({ theme }) => theme.palette.border};
      color: ${({ theme }) => theme.palette.link};
    }
  }
`;
