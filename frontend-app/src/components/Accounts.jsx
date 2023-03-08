import { Link } from "react-router-dom";

import styled from "styled-components";

const Accounts = ({ account }) => {
  const { type, bal, number, desc, img: Image, alt: altText } = account;

  return (
    <Container to="/accounts">
      <div className="left">
        <img className="acct-icon" src={Image} alt={altText} />
      </div>
      <div className="right">
        <p className="acct-type">{type}</p>
        <p>({number})</p>
        <p className="acct-bal">{bal}</p>
        <p>{desc} bal</p>
      </div>
    </Container>
  );
};

export default Accounts;

const Container = styled(Link)`
  border: 1px solid ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.main};
  padding: 10px 15px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.altText};

  :hover {
    background: ${({ theme }) => theme.primary};
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }

  .card-left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }

  .card-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .acct-icon {
    width: 35px;
    height: 35px;
    margin-right: 12px;
  }

  .acct-bal {
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    margin-top: 8px;
  }

  .acct-type {
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    font-weight: 600;
  }
`;
