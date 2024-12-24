import {
  CalendarDaysIcon,
  CheckBadgeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const ACCOUNT_SUMMARY = [
  {
    accountId: "493097583584",
    account: "smart rewards checking",
    accountNo: 3473,
    interestRate: 0.005,
    interestPaidNow: "0.00",
    interestPaidThen: "750.25",
    tier: "premium",
    balance: "7,720.83",
    transactions: [
      {
        date: "11/02/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        date: "10/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        date: "10/29/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        date: "03/22/2024",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
  {
    accountId: "583492854053",
    account: "traditional IRA",
    accountNo: 5823,
    interestRate: 1.85,
    interestPaidNow: "0.00",
    interestPaidThen: "2,500.85",
    tier: "regular",
    balance: "56,250.99",
    transactions: [
      {
        date: "10/14/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        date: "06/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        date: "02/12/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        date: "11/18/2023",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
  {
    accountId: "586503848234",
    account: "prime share savings",
    accountNo: 7534,
    interestRate: 2.55,
    interestPaidNow: "0.00",
    interestPaidThen: "4,750.00",
    tier: "premium",
    balance: "247,560.14",
    transactions: [
      {
        date: "06/15/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        date: "02/10/2022",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        date: "01/30/2022",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        date: "01/28/2022",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
];

export const CREDIT_CARDS = [
  {
    accountId: "883458348237",
    account: "customized cash rewards visa",
    accountNo: 9548,
    interestRate: "0.00",
    interestPaidNow: "0.00",
    interestPaidThen: "0.00",
    tier: "regular",
    balance: "9,250.00",
    transactions: [
      {
        date: "10/14/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        date: "06/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        date: "02/12/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        date: "11/18/2023",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
  {
    accountId: "883204948345",
    account: "venture rewards mastercard",
    accountNo: 5632,
    interestRate: "0.00",
    interestPaidNow: "0.00",
    interestPaidThen: "0.00",
    tier: "premium",
    balance: "40,690.06",
    transactions: [
      {
        date: "10/14/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        date: "06/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        date: "02/12/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        date: "11/18/2023",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
];

// table data shown on our overview and transaction pages
export const MAIN_TABLE = [
  {
    id: 222,
    date: "11/02/2024",
    description: "ATM deposit",
    amount: "465,000.00",
    balance: "467,720.83",
  },
  {
    id: 666,
    date: "10/08/2024",
    description: "Mobile banking payment to Credit Card",
    amount: "2,000.00",
    balance: "2,720.83",
  },
  {
    id: 999,
    date: "10/08/2024",
    description: "Debit purchase - Apple Green Bay",
    amount: "2,000.00",
    balance: "2,720.83",
  },
  {
    id: 888,
    date: "10/14/2024",
    description: "Internet banking payment to Credit Card",
    amount: "6,500.00",
    balance: "467,720.83",
  },
];

export const SCHEDULED_ACTIVITY = [
  {
    id: 100,
    description: "Credit Card ...6230",
    account: "Smartplus Checking",
    accountNo: 3472,
    amount: "25.23",
    date: "10/1/2024",
    icon: CalendarDaysIcon,
  },
  {
    id: 101,
    description: "Funds transfer ...4424",
    account: "Smartplus Checking",
    accountNo: 3472,
    amount: "55.00",
    date: "9/28/2024",
    icon: CalendarDaysIcon,
  },
  {
    id: 102,
    description: "TXU Energy",
    account: "Smartplus Savings",
    accountNo: 4572,
    amount: "110.00",
    date: "9/20/2024",
    icon: CalendarDaysIcon,
  },
];

export const PENDING_ACTIVITY = [
  {
    id: 103,
    description: "Starbucks",
    account: "Smartplus Checking",
    accountNo: 3472,
    amount: "10.50",
    date: "11/8/2024",
    icon: ClockIcon,
  },
  {
    id: 108,
    description: "Amazon Prime",
    account: "Credit Card",
    accountNo: 8372,
    amount: "12.65",
    date: "11/8/2024",
    icon: ClockIcon,
  },
];

export const COMPLETED_ACTIVITY = [
  {
    id: 104,
    description: "Target",
    account: "Smartplus Checking",
    accountNo: 3472,
    amount: "350.75",
    date: "10/1/2024",
    icon: CheckBadgeIcon,
  },
  {
    id: 105,
    description: "ABC Corp.",
    account: "Smartplus Savings",
    accountNo: 4572,
    amount: "10.45",
    date: "10/1/2024",
    icon: CheckBadgeIcon,
  },
  {
    id: 106,
    description: "U.S. Bank",
    account: "Credit Card",
    accountNo: 8372,
    amount: "83.50",
    date: "10/1/2024",
    icon: CheckBadgeIcon,
  },
  {
    id: 107,
    description: "Doll Exchange",
    account: "Smartplus Checking",
    accountNo: 3472,
    amount: "70.05",
    date: "10/1/2024",
    icon: CheckBadgeIcon,
  },
];
