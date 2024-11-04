import { ArrowForwardIos } from "@mui/icons-material";
import styled from "styled-components";

const TransferCard = ({ title, desc, action }) => {
  return (
    <Container>
      <div className="content">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>

      <hr />
      <div className="action">
        <a href="#">
          {action}
          <ArrowForwardIos style={{ fontSize: "13px", marginLeft: "3px" }} />
        </a>
      </div>
    </Container>
  );
};

export default TransferCard;

const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  background: ${({ theme }) => theme.palette.main};
  border: 1px solid ${({ theme }) => theme.palette.border};
  padding: 20px;
  width: 20rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h5 {
    font-size: ${({ theme }) => theme.typography.main.fontSize[3]};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[1]};
    margin-bottom: 10px;
  }

  p {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.altText};
    font-weight: ${({ theme }) => theme.typography.main.fontWeight[0]};
  }

  hr {
    margin: -20px;
    border-color: ${({ theme }) => theme.palette.hr};
  }

  .action {
    display: flex;
    justify-content: flex-end;
  }

  a {
    font-size: ${({ theme }) => theme.typography.main.fontSize[1]};
    color: ${({ theme }) => theme.palette.link};
    background: none;
    border: none;
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
  }
`;
