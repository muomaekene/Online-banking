import styled from "styled-components";

const Footer = () => {
  return (
    <PageFooter>
      All rights reserved &#169; 2023 Credit Union of New Jersey
    </PageFooter>
  );
};

export default Footer;

const PageFooter = styled.footer`
  padding: 8px;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.altText};
`;
