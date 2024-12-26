import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const Info = () => {
  return (
    <Container>
      <div className="left">
        <ExclamationCircleIcon className="icon" />
        <span>
          Your accounts have been restricted, visit our nearest branch to get
          this resolved.
        </span>
      </div>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  margin-top: 10px;
  background: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.danger};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  color: ${({ theme }) => theme.palette.danger};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 20px;
  font-size: ${({ theme }) => theme.typography.main.fontSize[2]};

  .left {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 5px;
    display: block;
  }

  .icon {
    width: 18px;
    cursor: pointer;
  }
`;
