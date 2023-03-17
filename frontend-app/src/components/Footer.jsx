import styled from "styled-components";

const Footer = () => {
  return (
    <PageFooter>
      <small>All rights reserved &#169; 2023 Credit Union of New Jersey</small>
    </PageFooter>
  );
};

export default Footer;

const PageFooter = styled.footer`
  height: 6%;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.altText};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
