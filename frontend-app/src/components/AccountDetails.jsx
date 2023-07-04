import { ChevronDownIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

const AccountDetails = ({ item }) => {
  return (
    <Container>
      <div className="account-info">
        <p className="account-type">
          {item.type} - {item.number}
        </p>
        <p className="account-bal">${item.amount}</p>
      </div>
      <div className="dropdown">
        <p className="recent">Recent transactions</p>
        <ChevronDownIcon className="icon" />
      </div>
    </Container>
  );
};

export default AccountDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 15px;
  height: 65px;
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 10px;

  .account-info {
    display: flex;
    justify-content: space-between;
  }

  .account-type {
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text};
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .account-bal {
    font-size: 12px;
    font-weight: 400;
  }

  .dropdown {
    width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .recent {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.altText};
    margin-right: 5px;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .icon {
    width: 10px;
    height: 10px;
  }
`;
