import { Link } from "react-router-dom";

import styled from "styled-components";

const DropdownOption = (props) => {
  const {
    title,
    icon: Icon,
    to: to,
    message: message,
    time: time,
  } = props.data;

  return (
    <Container>
      <Link className="nav-link" to={to}>
        <Icon className="icon-2" />
        <div className="text-group">
          <p className="title"> {title}</p>
          <p className="message"> {message}</p>
        </div>
        <p className="time">{time}</p>
      </Link>
    </Container>
  );
};

export default DropdownOption;

const Container = styled.li`
  padding: 5px 15px;
  cursor: pointer;
  position: relative;
  font-size: 12px;

  :hover {
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.text};
  }

  .nav-link {
    display: flex;
    align-items: center;
  }

  .text-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  }

  .message {
    color: ${({ theme }) => theme.palette.altText};
    font-size: 11px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title {
    white-space: nowrap;
    font-weight: 500;
    margin-top: 5px;
  }

  .time {
    font-size: 10px;
    position: absolute;
    right: 15px;
    top: 7px;
  }

  .icon-2 {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.palette.altText};
    margin-right: 7px;
  }
`;
