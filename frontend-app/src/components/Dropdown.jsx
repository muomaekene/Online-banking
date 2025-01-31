import { useEffect, useState, useRef } from "react";

import DropdownOption from "./DropdownOption";

import styled from "styled-components";

const Dropdown = ({ triggerElement, data, name, icon, userID, link }) => {
  const [open, setIsOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <Container ref={menuRef}>
      <div className="menu-trigger" onClick={() => setIsOpen(!open)}>
        {triggerElement}
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <div className="menu-header">
          <div className="tooltip">
            <p className="menu-name">{name}</p>
            <a href="#" className="menu-link">
              {link || icon}
            </a>
          </div>
          <small className="user-id">{userID}</small>
        </div>
        <ul className="menu-content">
          {data.map((option) => (
            <DropdownOption key={option.title} data={option} />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 667;

  .dropdown-menu {
    position: absolute;
    left: -100px;
    margin-top: 46px;
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    background: ${({ theme }) => theme.palette.main};
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: ${({ theme }) => theme.borderRadius[1]};
    min-width: 15rem;

    :before {
      content: "";
      position: absolute;
      top: -4px;
      left: 45%;
      height: 18px;
      width: 18px;
      background: ${({ theme }) => theme.palette.primary};
      border: 1px solid ${({ theme }) => theme.palette.border};
      transform: rotate(45deg);
      z-index: -1;
    }
  }

  .menu-header {
    padding: ${({ theme }) => theme.spacing(1)};
    ${({ theme }) => theme.spacing(2)};
    background: ${({ theme }) => theme.palette.main};
    border-top-right-radius: ${({ theme }) => theme.borderRadius[1]};
    border-top-left-radius: ${({ theme }) => theme.borderRadius[1]};
  }

  .tooltip {
    display: flex;
    justify-content: space-between;
  }

  .menu-name {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
  }

  .menu-link {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    text-decoration: underline;

    :hover {
      color: ${({ theme }) => theme.palette.altText};
    }
  }

  .user-id {
    color: ${({ theme }) => theme.palette.altText};
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
  }

  .menu-content {
    border-top: 1px solid ${({ theme }) => theme.palette.border};
    list-style-type: none;
  }

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 0.5s ease all;
  }

  .inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
  }
`;
