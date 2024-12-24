import {
  ArrowDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";
import NavigationBtn from "../components/NavigationBtn";
import { NavLink, Outlet, useParams } from "react-router-dom";

import styled from "styled-components";
import Select from "../components/Select";
import TableMain from "../components/TableMain";

const AccountDetailsPage = () => {
  const params = useParams();

  return (
    <Container>
      <NavigationBtn />

      {/* <p>{params.id}</p> */}
      <section className="generic account-summary">
        <div className="left">
          <p className="account-name">Smart rewards checking | ...3473</p>
          <p className="option">Edit account settings</p>
        </div>
        <div className="right">
          <p className="account-bal">$7,720.83</p>
          <p className="option">Available balance</p>
        </div>
      </section>

      <section className="generic">
        <div className="title">Overview</div>
        <div className="content">
          <p>
            Account number <span>************3473</span>
          </p>
          <p>
            Routing number <span>74583474738</span>
          </p>
          <p>
            Account tier <span>Primary</span>
          </p>

          <p className="external-link">
            Setup direct deposit <ChevronRightIcon width="15px" />
          </p>
        </div>
        <div className="title space">Details</div>
        <div className="content">
          <p>
            Interest rate <span>0.005%</span>
          </p>
          <p>
            Interest paid this year <span>$0.00</span>
          </p>
          <p>
            Interest paid last year<span>$105.20</span>
          </p>
          <p>
            Fees/charges <span>$51.00</span>
          </p>
        </div>
      </section>
      <section className="table-cover">
        <div className="top-group">
          <div className="title">Activities</div>

          <div className="all-actions">
            <div className="actions">
              <p>
                <MagnifyingGlassIcon width="15px" /> Search
              </p>
              <p>
                <ArrowDownIcon width="15px" /> Download
              </p>
              <p>
                <PrinterIcon width="15px" /> Print
              </p>
            </div>
            <div className="filter">
              <Select placeholder="Sort: Date - Newest to Oldest" />
            </div>
          </div>
        </div>

        <TableMain />
      </section>
    </Container>
  );
};

export default AccountDetailsPage;

const Container = styled.div`
  height: 100%;
  width: 70%;
  overflow-x: hidden !important;

  .generic {
    margin-bottom: 15px;
    background: ${({ theme }) => theme.palette.main};
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    margin-right: 15px;
    padding: 20px;
  }

  .table-cover {
    background: ${({ theme }) => theme.palette.main};
    margin-bottom: 15px;
    margin-right: 15px;
    padding-bottom: 10px;
    border-radius: ${({ theme }) => theme.borderRadius[1]};

    .top-group {
      padding: 20px 20px 0px 20px;
    }
  }

  .space {
    margin-top: 15px;
  }

  .external-link {
    color: ${({ theme }) => theme.palette.link};
    display: flex;
  }

  .account-summary {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;

    .option {
      color: ${({ theme }) => theme.palette.link};
    }
  }

  .content {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid ${({ theme }) => theme.palette.border};

    > p {
      padding-bottom: 5px;
    }
  }

  .title {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  }

  .account-name {
    font-size: ${({ theme }) => theme.typography.main.fontSize[4]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    text-transform: capitalize;
  }

  .account-bal {
    font-size: ${({ theme }) => theme.typography.main.fontSize[4]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    /* height: 100%; */
  }
  p {
    position: relative;
    span {
      position: absolute;
      right: 0px;
    }
  }

  .all-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .actions {
    margin-top: 15px;
    display: flex;
    gap: 15px;

    > p {
      display: flex;
      align-items: center;
      gap: 2px;
      text-decoration: underline;
    }
  }
`;
