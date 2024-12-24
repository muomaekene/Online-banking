import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ActivitySummary from "./ActivitySummary";

import {
  SCHEDULED_ACTIVITY,
  COMPLETED_ACTIVITY,
  PENDING_ACTIVITY,
} from "../utils/COMPONENT_DATA";

import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const Activity = () => {
  return (
    <Container>
      <div className="activity-card">
        <SectionHeader title="Transfer Activities" />
        <div className="top-border"></div>

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
  width: 32%;

  .activity-card {
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    background: ${({ theme }) => theme.palette.main};
    height: fit-content;
    margin-left: 15px;
  }

  .top-border {
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};

    form {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.palette.border};
      border-radius: ${({ theme }) => theme.borderRadius[0]};
      display: flex;
      margin-right: 20px;
      padding: 0 10px;

      input {
        background: red;
        padding: 10px 0;
        width: 100%;
        border: none;
        outline: none;
        margin-left: 5px;
        background: transparent;
        color: ${({ theme }) => theme.palette.text};
        font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
      }
    }
  }

  .footer {
    padding: 15px 20px;
    width: 100%;
  }
`;

const ActivityTitle = styled.div`
  padding: 6px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
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
