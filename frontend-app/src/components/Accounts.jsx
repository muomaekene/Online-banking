import React from "react";
import { accountInfo } from "../utils/uiData";
import AccountCard from "./AccountCard";

import styled from "styled-components";

const Accounts = () => {
  return (
    <Section>
      {accountInfo.map((info) => (
        <AccountCard account={info} key={info.key} />
      ))}
    </Section>
  );
};

export default Accounts;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing(2)};
`;
