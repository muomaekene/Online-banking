import CustomBtn from "./CustomBtn";
import Select from "./Select";
import TransferInput from "./TransferInput";
import SectionHeader from "./SectionHeader";

import styled from "styled-components";

const InternalTransfer = () => {
  return (
    <Section>
      <SectionHeader title="Internal transfer" />
      <div className="form">
        <Select
          placeholder="Transfer From"
          options={[
            "Classic Savings (...9792)",
            "Venture Rewards Visa (...5632)",
            "Classic Checking (...9548)",
          ]}
        />
        <Select
          placeholder="Transfer To"
          options={[
            "Classic Savings (...9792)",
            "Venture Rewards Visa (...5632)",
            "Classic Checking (...9548)",
          ]}
        />
        <TransferInput icon="$" placeholder="Enter Amount" />

        <div className="check-check">
          <input type="checkbox" name="repeat" id="repeat" />
          <label htmlFor="repeat">Repeat this transfer</label>
        </div>

        <CustomBtn>Send Transfer</CustomBtn>
      </div>
    </Section>
  );
};

export default InternalTransfer;

const Section = styled.section`
  width: 20rem;
  background: ${({ theme }) => theme.palette.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: 1px solid ${({ theme }) => theme.palette.border};

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 20px 20px 20px;
  }

  .check-check {
    display: flex;
    gap: 5px;

    label {
      font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
    }
  }
`;
