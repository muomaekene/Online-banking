import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Statements from "../components/Statements";

import styled from "styled-components";

const AccountStatementsPage = () => {
  return (
    <Container>
      <Heading>Statements & Documents</Heading>
      <Subheading>
        Generate and print your monthly account statements
      </Subheading>
      <Statements />
    </Container>
  );
};

export default AccountStatementsPage;

const Container = styled.div`
  width: 67%;
  padding-right: 15px;
`;
