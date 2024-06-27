import SectionHeader from "./SectionHeader";
import TransferForm from "./TransferForm";

import styled from "styled-components";

const QuickTransfer = () => {
  return (
    <Section>
      <SectionHeader title="Quick transfer" />
      <TransferForm />
    </Section>
  );
};

export default QuickTransfer;

const Section = styled.section`
  height: 22.5rem;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.palette.main};
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
`;
