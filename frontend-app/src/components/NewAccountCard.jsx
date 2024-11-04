import { ArrowForwardIos } from "@mui/icons-material";
import styled from "styled-components";

const NewAccountCard = ({ name, desc, children }) => {
  return (
    <Section>
      <h5 className="account-name"> {name}</h5>
      <hr />
      <p className="account-desc">{desc}</p>
      <div className="account-features">{children}</div>
      <hr />
      <div className="account-actions">
        <a href="#">See Details</a>
        <a href="#">
          Open Account
          <ArrowForwardIos style={{ fontSize: "13px", marginLeft: "3px" }} />
        </a>
      </div>
    </Section>
  );
};

export default NewAccountCard;

const Section = styled.section`
  font-size: 13px;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  padding: 20px;
  width: 100%;

  hr {
    border-color: ${({ theme }) => theme.palette.hr};
    margin: 10px -20px 10px;
  }

  .account-name {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: 10px;
  }

  .account-desc {
    color: ${({ theme }) => theme.palette.altText};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  }

  .account-actions {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    a {
      font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
      color: ${({ theme }) => theme.palette.link};
      display: flex;
      align-items: center;
    }
  }

  .account-features {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
