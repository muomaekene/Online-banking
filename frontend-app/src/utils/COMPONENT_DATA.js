import {
  CalendarDaysIcon,
  CheckBadgeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const ACCOUNT_SUMMARY = [
  {
    accountId: 4930975835,
    account: "smartplus checking account",
    accountNo: 3473,
    balance: "7,720.83",
    transactions: [
      {
        transactionNum: 754986893665,
        date: "11/02/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        transactionNum: 768945389533,
        date: "10/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        transactionNum: 748645783496,
        date: "10/29/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        transactionNum: 798472643612,
        date: "03/22/2024",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
  {
    accountId: 583492854053,
    account: "fixed term individual retirement account",
    accountNo: 5823,
    balance: "56,250.99",
    transactions: [
      {
        transactionNum: 754986893689,
        date: "10/14/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        transactionNum: 768945389502,
        date: "06/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        transactionNum: 748645783476,
        date: "02/12/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        transactionNum: 798472643610,
        date: "11/18/2023",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
  {
    accountId: 586503848234,
    account: "smartplus savings account",
    accountNo: 7534,
    balance: "247,560.14",
    transactions: [
      {
        transactionNum: 767683948321,
        date: "06/15/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        transactionNum: 760239458349,
        date: "02/10/2022",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        transactionNum: 759054050322,
        date: "01/30/2022",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        transactionNum: 791103540342,
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
    accountId: 883458348237,
    account: "Customized Cash Rewards Visa Card",
    accountNo: 9548,
    balance: "9,250.00",
    transactions: [
      {
        transactionNum: 54986893689,
        date: "10/14/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        transactionNum: 68945389502,
        date: "06/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        transactionNum: 48645783476,
        date: "02/12/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        transactionNum: 98472643610,
        date: "11/18/2023",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
  {
    accountId: 883204948345,
    account: "Venture Rewards Visa Card",
    accountNo: 5632,
    balance: "40,690.06",
    transactions: [
      {
        transactionNum: 54986893689,
        date: "10/14/2024",
        description: "CREDIT",
        amount: "465,000.00",
        balance: "467,720.83",
      },
      {
        transactionNum: 68945389502,
        date: "06/08/2024",
        description: "TRF",
        amount: "2,000.00",
        balance: "2,720.83",
      },
      {
        transactionNum: 48645783476,
        date: "02/12/2024",
        description: "DEBIT",
        amount: "4,500.20",
        balance: "42,940.06",
      },
      {
        transactionNum: 98472643610,
        date: "11/18/2023",
        description: "CREDIT",
        amount: "570.00",
        balance: "10,820.08",
      },
    ],
  },
];

export const MAIN_TABLE = [
  {
    id: 222,
    accountName: "smartplus checking",
    date: "11/02/2024",
    description: "CREDIT",
    amount: "465,000.00",
    balance: "467,720.83",
  },
  {
    id: 666,
    accountName: "smartplus checking",
    date: "10/08/2024",
    description: "TRF",
    amount: "2,000.00",
    balance: "2,720.83",
  },
  {
    id: 888,
    accountName: "venture rewards visa cards",
    date: "10/14/2024",
    description: "CREDIT",
    amount: "465,000.00",
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
