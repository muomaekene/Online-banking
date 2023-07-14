import { Link } from "react-router-dom";

import styled from "styled-components";

const AccountBanner = ({ account }) => {
  const { type, bal, number, desc, img: Image, alt: altText } = account;

  return (
    <Container to="/accounts">
      <img className="account-icon" src={Image} alt={altText} />
      <div>
        <p className="account-type">{type}</p>
        <p>({number})</p>
        <p className="account-bal">{bal}</p>
        <p>{desc}</p>
      </div>
    </Container>
  );
};

export default AccountBanner;

const Container = styled(Link)`
  padding: 10px 15px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  color: ${({ theme }) => theme.palette.altText};

  :hover {
    background: ${({ theme }) => theme.palette.secondary};
  }

  .account-icon {
    width: 35px;
    height: 35px;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  .account-type {
    color: ${({ theme }) => theme.palette.text};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    text-transform: capitalize;
  }

  .account-bal {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    color: ${({ theme }) => theme.palette.text};
    margin-top: 8px;
  }
`;
