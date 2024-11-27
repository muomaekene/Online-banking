import React from "react";
import styled from "styled-components";

const FooterInfo = () => {
  return (
    <>
      <Info>
        <b> Rate information</b>- The dividend rate and annual percentage yield
        may change at any time, as determined by the Credit Union Board of
        Directors. <br /> <b>Compounding and crediting</b>- Dividends will be
        compounded every month. Dividends will be credited to your account every
        month. <br /> <b>Dividend period</b>- For this account type, the
        dividend period is monthly, for example, the beginning date of the first
        dividend period of the calendar year is January 1, and the ending date
        of such dividend period is January 31. All other dividend periods follow
        this same pattern of dates. The dividend declaration date is the last
        day of the dividend period; and for the example above, is January 31. If
        you close your account before dividends are paid, you will not receive
        the accrued dividends.
        <br /> <b> Minimum balance requirements</b>- No minimum balance
        requirements apply to this account. <br />
        <b> Average daily balance computation method</b> - Dividends are
        calculated by the average daily balance method, which applies a periodic
        rate to the average daily balance in the account for the period. The
        average daily balance is calculated by adding the balance in the account
        for each day of the period and dividing that figure by the number of
        days in the period. The period we use is the monthly statement cycle.
        <br /> <b>Accrual of dividends on non-cash deposits</b> - Dividends will
        begin to accrue on the business day you place non-cash items (for
        example, checks) to your account. <br /> <b> Transaction limitations</b>{" "}
        - We reserve the right to at any time require not less than seven days
        notice in writing before each withdrawal.
      </Info>
      <Info>
        The rates for deposit accounts will be provided at the time of
        membership, at the time of opening a new deposit account, or at any time
        upon request. Rates may change after account opening.
      </Info>
      <Info>
        Membership eligibility is required. Federally insured to at least
        $250,000 (IRA accounts insured separately up to $250,000) by NCUA, an
        agency of the US Government.
      </Info>
    </>
  );
};

export default FooterInfo;

const Info = styled.p`
  margin-top: 15px;
  font-size: 11px;
  font-style: italic;
`;
