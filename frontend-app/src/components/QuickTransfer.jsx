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
  height: 311px;
  border-radius: ${({ theme }) => theme.border.radius};
  border: 1px solid ${({ theme }) => theme.palette.border};
  background: ${({ theme }) => theme.palette.main};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
