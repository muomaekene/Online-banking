import {
  ChevronRightIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NewAccountCard = ({ id, name, sc_desc, children }) => {
  return (
    <Section>
      <h2 className="account-name"> {name}</h2>
      <div className="account-content">
        <p className="account-desc">{sc_desc}</p>
        <div className="account-features">{children}</div>
      </div>

      <div className="account-actions">
        <CustomLink to={id}>
          Learn more
          <ChevronRightIcon width="14px" />
        </CustomLink>
        <CustomLink to="checkout">
          <PlusIcon width="14px" /> Open account
        </CustomLink>
      </div>
    </Section>
  );
};

export default NewAccountCard;

const Section = styled.section`
  font-size: 13px;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  width: 100%;
  height: fit-content;

  .account-content {
    height: 12rem;
    border-top: 1px solid ${({ theme }) => theme.palette.border};
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    padding: 10px 20px 0 20px;
  }

  .account-name {
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    padding: 20px 0 10px 20px;
    text-transform: capitalize;
  }

  .account-desc {
    color: ${({ theme }) => theme.palette.altText};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    line-height: 1.2rem;
  }

  .account-actions {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 20px 20px;
  }

  .account-features {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const CustomLink = styled(Link)`
  display: flex;
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
`;
