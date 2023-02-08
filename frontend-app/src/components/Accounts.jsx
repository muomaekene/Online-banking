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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0 15px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.altText};
  transition: all 0.5s ease;

  :hover {
    background: ${(props) => props.theme.primary};
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
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }

  .acct-bal {
    font-size: 16px;
    color: ${(props) => props.theme.text};
    margin-top: 8px;
    margin-bottom: -3px;
  }

  .acct-type {
    color: ${(props) => props.theme.text};
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: -3px;
  }
`;
