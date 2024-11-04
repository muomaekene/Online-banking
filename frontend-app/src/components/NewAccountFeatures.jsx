import { CheckOutlined } from "@mui/icons-material";
import styled from "styled-components";

const NewAccountFeatures = ({ children }) => {
  return (
    <Feature>
      <CustomCheckOutline>
        <CheckOutlined style={{ fontSize: "14px", marginRight: "10px" }} />
      </CustomCheckOutline>
      {children}
    </Feature>
  );
};

export default NewAccountFeatures;

const Feature = styled.p`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.main.fontSize[0]};
`;

const CustomCheckOutline = styled.div`
  color: ${({ theme }) => theme.palette.link};
`;
