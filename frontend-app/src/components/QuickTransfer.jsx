import SectionHeader from "./SectionHeader";
import More from "./More";
import TransferForm from "./TransferForm";

import styled from "styled-components";

const QuickTransfer = () => {
  return (
    <Section>
      <SectionHeader title="Quick transfer">
        <More />
      </SectionHeader>
      <TransferForm />
    </Section>
  );
};

export default QuickTransfer;

const Section = styled.section`
  height: 19.8rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
