import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ActivitySummary from "./ActivitySummary";

import {
  SCHEDULED_ACTIVITY,
  COMPLETED_ACTIVITY,
  PENDING_ACTIVITY,
} from "../utils/COMPONENT_DATA";

import styled from "styled-components";

const Activity = () => {
  return (
    <Container>
      <div className="header">
        <h5>Transfer Activity</h5>
        <form action="">
          <MagnifyingGlassIcon width="20" />
          <input type="text" name="" id="" placeholder="Search Transactions" />
        </form>
      </div>

      <ActivityTitle>
        <p>Scheduled</p>
        <p>$250.11</p>
      </ActivityTitle>

      {SCHEDULED_ACTIVITY.map((item) => (
        <ActivitySummary item={item} key={item.id} />
      ))}

      <ActivityTitle>
        <p>Pending</p>
      </ActivityTitle>

      {PENDING_ACTIVITY.map((item) => (
        <ActivitySummary item={item} key={item.id} />
      ))}

      <ActivityTitle>
        <p>Completed</p>
      </ActivityTitle>
      {COMPLETED_ACTIVITY.map((item) => (
        <ActivitySummary item={item} key={item.id} />
      ))}

      <div className="footer">
        <Anchor to="/transactions">View More Transactions</Anchor>
      </div>
    </Container>
  );
};

export default Activity;

const Container = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  width: 30%;
  height: fit-content;

  .header {
    padding: 20px 15px 15px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: 10px;
  }

  form {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    display: flex;
    padding: 8px 6px;

    :active {
      border: 1px solid ${({ theme }) => theme.palette.link};
    }
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    margin-left: 5px;
    background: transparent;
    color: ${({ theme }) => theme.palette.text};
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  }

  .footer {
    padding: 15px;
    width: 100%;
  }
`;

const ActivityTitle = styled.div`
  padding: 6px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
  font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
`;

const Anchor = styled(Link)`
  border: 1px solid ${({ theme }) => theme.palette.link};
  color: ${({ theme }) => theme.palette.text};
  width: 100%;
  padding: 4px;
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  cursor: pointer;

  :active {
    background: ${({ theme }) => theme.palette.focus};
    background-size: 100%;
  }
`;
