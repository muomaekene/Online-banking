import styled from "styled-components";

const ActivitySummary = ({ item }) => {
  const { accountNo, account, description, amount, date, icon: Icon } = item;

  return (
    <Container>
      <div className="account-info">
        <StyledIcon>
          <Icon />
        </StyledIcon>

        <div className="account">
          <p className="top">{description}</p>
          <p className="bottom">
            {account} ...{accountNo}
          </p>
        </div>
      </div>

      <div className="others">
        <p className="top" style={{ marginLeft: "auto" }}>
          ${amount}
        </p>
        <p className="bottom">{date}</p>
      </div>
    </Container>
  );
};

export default ActivitySummary;

const Container = styled.div`
  font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
  font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 20px;

  .account-info {
    display: flex;
    align-items: center;
  }

  .account {
    margin-left: 10px;
  }

  .others {
    display: flex;
    flex-direction: column;
  }

  .top {
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.link};
  }

  .bottom {
    font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
    color: ${({ theme }) => theme.palette.altText};
  }
`;

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.palette.altText};
  width: 20px;
`;
