import styled from "styled-components";

const Accounts = ({ account }) => {
  const { acctType, acctBal, acctNo, desc, img: Image, alt: altText } = account;

  return (
    <Container>
      <div className="left">
        <img className="acct-icon" src={Image} alt={altText} />
      </div>
      <div className="right">
        <p className="acct-type">{acctType}</p>
        <p>({acctNo})</p>
        <p className="acct-bal">{acctBal}</p>
        <p>{desc} bal</p>
      </div>
    </Container>
  );
};

export default Accounts;

const Container = styled.div`
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.box};
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
    background: ${({ theme }) => theme.border};
    box-shadow: none;
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
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    margin-top: 4px;
    margin-bottom: -7px;
  }

  .acct-type {
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: -6px;
  }
`;
