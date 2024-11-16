import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import NewAccountCard from "../components/NewAccountCard";
import NewAccountFeatures from "../components/NewAccountFeatures";

import { ACCOUNTS_AVAILABLE, btnList } from "../utils/uiData";
import { useEffect, useState } from "react";

import styled from "styled-components";

const CreateAccountPage = () => {
  const [active, setActive] = useState("all");
  const [accounts, setAccounts] = useState(ACCOUNTS_AVAILABLE);

  const handleClick = (event) => {
    event.preventDefault();
    setActive(event.target.id);
  };

  useEffect(() => {
    if (active === "all") {
      setAccounts(ACCOUNTS_AVAILABLE);
    } else {
      const filtered = ACCOUNTS_AVAILABLE.filter((account) => {
        return account.category === active || account.category.includes(active);
      });
      setAccounts(filtered);
    }
  }, [active]);

  return (
    <Container>
      <Heading>Everyday Banking Made For You</Heading>
      <Subheading>
        Choose an account that fits your needs and get started
      </Subheading>

      <div className="filter-buttons">
        {btnList.map((btn) => (
          <button
            key={btn.id}
            className={active === btn.id ? "active" : undefined}
            id={btn.id}
            onClick={handleClick}
          >
            {btn.name}
          </button>
        ))}
      </div>

      <div className="all-accounts">
        {accounts.map((account) => (
          <NewAccountCard
            key={account.name}
            name={account.name}
            desc={account.description}
          >
            {account.features.map((feature) => (
              <NewAccountFeatures key={feature}>{feature}</NewAccountFeatures>
            ))}
          </NewAccountCard>
        ))}
      </div>
    </Container>
  );
};

export default CreateAccountPage;

const Container = styled.section`
  width: 70%;
  height: 100%;
  overflow-x: hidden !important;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.palette.scrollbar};
  }

  .filter-buttons {
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
    list-style-type: none;

    button {
      background: ${({ theme }) => theme.palette.main};
      padding: 10px 20px;
      border-radius: ${({ theme }) => theme.borderRadius[1]};
      border: none;
      color: ${({ theme }) => theme.palette.altText};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
      font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
      cursor: pointer;
    }

    .active {
      background: ${({ theme }) => theme.palette.solid};
      color: ${({ theme }) => theme.palette.activeText};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
      border: none;
    }
  }

  .all-accounts {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
  }
`;
