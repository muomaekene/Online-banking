import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { accountInfo } from "../utils/uiData";

import AccountBanner from "./AccountBanner";
import Heading from "./Heading";

import styled from "styled-components";

const AccountBanners = () => {
  return (
    <>
      <Top>
        <Heading>Accounts</Heading>
        <Link to="/accounts">
          See all accounts <ChevronRightIcon width="14px" />
        </Link>
      </Top>

      <Section>
        {accountInfo.map((info) => (
          <AccountBanner account={info} key={info.key} />
        ))}
      </Section>
    </>
  );
};

export default AccountBanners;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: 5px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  }
`;
