import styled from "styled-components";

const AuthFooter = () => {
  return (
    <Container>
      <div className="navigation">
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Main site</li>
            <li>Privacy policy</li>
            <li>Disclosures</li>
            <li>Browser support</li>
          </ul>
          <p className="copyright">
            Copyright &copy; 2024. All rights reserved
          </p>
        </nav>
      </div>

      <div className="more-info">
        <p>
          Routing number: <span>263079014</span>
        </p>

        <div className="images">
          <img
            src={"https://pathwayscu.com/assets/dist/images/ncua-en.svg"}
            alt="ncua logo"
            width="150px"
          />
          <img
            src={
              "https://www.nar.realtor/sites/default/files/downloadable/equal-housing-opportunity-logo-1200w.jpg"
            }
            alt="equal housing logo"
            width="100px"
          />
        </div>
      </div>
    </Container>
  );
};

export default AuthFooter;

const Container = styled.footer`
  background: ${({ theme }) => theme.palette.main};
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid #ebe043;
  display: flex;
  font-size: ${({ theme }) => theme.typography.main.fontSize[2]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};

  .navigation {
    flex: 1;

    ul {
      list-style-type: none;
    }

    li {
      display: inline;
      margin-right: 20px;

      :hover {
        text-decoration: underline;
      }
    }

    .copyright {
      font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
      margin-top: 10px;
      color: ${({ theme }) => theme.palette.altText};
    }
  }

  .more-info {
    display: flex;
    flex-direction: column;

    .images {
      margin-top: 20px;
      display: flex;
      gap: 20px;
    }

    span {
      font-size: ${({ theme }) => theme.typography.main.fontSize[4]};
      font-weight: ${({ theme }) => theme.typography.main.fontWeight[2]};
    }
  }
`;
