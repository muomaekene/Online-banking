import LineChart from "./LineChart";
import SectionHeader from "./SectionHeader";
import Select from "./Select";

import styled from "styled-components";

const Analytics = () => {
  return (
    <Section>
      <SectionHeader title="Fiscal analytics">
        <div className="tooltip">
          <Select placeholder="2023" options={["2023", "2022", "2021"]} />
        </div>
      </SectionHeader>
      <LineChart />
    </Section>
  );
};

export default Analytics;

const Section = styled.section`
  position: relative;
  border-radius: ${({ theme }) => theme.border.radius};
  background: ${({ theme }) => theme.palette.main};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  .tooltip {
    width: 100px;
    position: absolute;
    right: 20px;
    top: 10px;
  }
`;
