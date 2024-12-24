import SectionHeader from "./SectionHeader";
import TransferForm from "./TransferForm";

import styled from "styled-components";

const QuickTransfer = () => {
  return (
    <Section>
      <SectionHeader title="Pay bill" />
      <TransferForm />
    </Section>
  );
};

export default QuickTransfer;

const Section = styled.section`
  height: 25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
`;
