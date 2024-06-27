import { ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const Info = () => {
  return (
    <Container>
      <div className="left">
        <ExclamationCircleIcon className="icon" />
        <p>Your accounts have been restricted!</p>
      </div>

      <XMarkIcon className="icon" />
    </Container>
  );
};

export default Info;

const Container = styled.div`
  background: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.danger};
  color: ${({ theme }) => theme.palette.text};
  border-radius: 6px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 20px;
  font-size: 13px;
  font-weight: 300;

  .left {
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 5px;
  }

  .icon {
    width: 20px;
    cursor: pointer;
  }
`;
