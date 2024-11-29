import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ACCOUNTS_AVAILABLE } from "../utils/uiData";
import NavigationBtn from "../components/NavigationBtn";
import FooterInfo from "../components/FooterInfo";

import styled from "styled-components";

const LearnMorePage = () => {
  const [accountsList, setAccountsList] = useState(ACCOUNTS_AVAILABLE);

  const params = useParams();

  useEffect(() => {
    const filtered = accountsList.filter((account) => account.id === params.id);
    setAccountsList(filtered);
  }, []);

  return (
    <Container>
      <NavigationBtn />
      {accountsList.map((account) => (
        <div className="all-details" key={account.id}>
          <h2 className="account-name">{account.name}</h2>
          <p className="top-desc">{account.sc_description}</p>

          <h3 className="title">How this account works:</h3>
          <p className="bottom-desc">{account.mn_description}</p>

          <h3 className="title">Benefits:</h3>
          <div className="features">
            {account.benefits.map((benefit) => (
              <p className="feature" key={benefit}>
                <CheckIcon width="18px" />
                {benefit}
              </p>
            ))}
          </div>

          <h3 className="title">Rates:</h3>
          <table>
            <thead>
              <tr>
                <th scope="col">Balance</th>
                <th scope="col">Dividend rate</th>
                <th scope="col">APY</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>

          <FooterInfo />
        </div>
      ))}
    </Container>
  );
};

export default LearnMorePage;

const Container = styled.div`
  font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  height: 100%;
  width: 70%;
  overflow-x: hidden !important;

  .features {
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: ${({ theme }) => theme.borderRadius[1]};
  }

  .all-details {
    margin-top: 10px;
    background: ${({ theme }) => theme.palette.main};
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    margin-right: 15px;
    padding: 20px;
  }

  .account-name {
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  }

  .top-desc {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    color: ${({ theme }) => theme.palette.altText};
  }

  .bottom-desc {
    /* margin-top: 20px; */
  }

  .title {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
    margin-top: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
    display: flex;
    gap: 5px;
  }

  .features {
    padding: 15px;
    width: fit-content;
  }

  .feature {
    padding: 4px 0;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  table {
    display: table;
    width: 100%;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    height: 10rem;
    padding: 15px;

    thead {
      tr {
        th {
          text-align: left;
          text-transform: uppercase;
          font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
          font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
        }
      }
    }
  }
`;
