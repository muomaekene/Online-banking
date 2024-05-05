import { accountInfo } from "../utils/uiData";
import AccountBanner from "./AccountBanner";

import styled from "styled-components";

const AccountBanners = () => {
  return (
    <Section>
      {accountInfo.map((info) => (
        <AccountBanner account={info} key={info.key} />
      ))}
    </Section>
  );
};

export default AccountBanners;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing(2)};
  height: 6rem;
`;
