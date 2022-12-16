import styled from "styled-components";

const Container = styled.aside`
  height: 100vh;
  width: 250px;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;

  .top-sidebar {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .logo {
      display: block;
      margin-bottom: 40px;

      .image {
        width: 40px;
      }
    }
  }
  .mid-sidebar {
    .navs {
      list-style: none;

      .nav-item {
        .nav-link {
          padding: 15px 20px;
          display: flex;
          align-items: center;

          .icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
          }
        }

        .active {
          background: ${(props) => props.theme.secondary};
          color: ${(props) => props.theme.primary};
          font-weight: 500;
          border-radius: 5px;
        }
      }
    }
  }
  .bottom-sidebar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;

    .sidebar-botton {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border-radius: 20px;
      border: none;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
      font-size: inherit;
      cursor: pointer;

      .logout-icon {
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
    }
  }
`;

export default Container;
