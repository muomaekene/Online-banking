import { Link } from "react-router-dom";

import ActivitySummary from "./ActivitySummary";
import SectionHeader from "./SectionHeader";
import Select from "./Select";

import { ACCOUNTS_OWNED } from "../utils/uiData";
import {
  SCHEDULED_ACTIVITY,
  COMPLETED_ACTIVITY,
  PENDING_ACTIVITY,
} from "../utils/COMPONENT_DATA";

import styled from "styled-components";

const Activity = () => {
  return (
    <Container>
      <div className="activity-card">
        <SectionHeader title="Activity" />
        <div className="action">
          <Select placeholder="All accounts" options={ACCOUNTS_OWNED} />
        </div>

        <ActivityTitle>Scheduled</ActivityTitle>

        {SCHEDULED_ACTIVITY.map((item) => (
          <ActivitySummary item={item} key={item.id} />
        ))}

        <ActivityTitle>Pending</ActivityTitle>

        {PENDING_ACTIVITY.map((item) => (
          <ActivitySummary item={item} key={item.id} />
        ))}

        <ActivityTitle>Completed</ActivityTitle>
        {COMPLETED_ACTIVITY.map((item) => (
          <ActivitySummary item={item} key={item.id} />
        ))}

        <div className="footer">
          <Anchor to="/transactions">View more transactions</Anchor>
        </div>
      </div>
    </Container>
  );
};

export default Activity;

const Container = styled.section`
  width: 33%;
  padding-left: 15px;

  .activity-card {
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    background: ${({ theme }) => theme.palette.main};
    height: fit-content;
  }

  .action {
    padding: 0 15px 15px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  }

  .footer {
    padding: 15px 20px;
    width: 100%;
  }
`;

const ActivityTitle = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;

  span {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
  }
`;

const Anchor = styled(Link)`
  color: ${({ theme }) => theme.palette.text};
  width: 100%;
  padding: 4px;
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  border: 1px solid ${({ theme }) => theme.palette.link};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    background: ${({ theme }) => theme.palette.focus};
    background-size: 100%;
  }
`;
