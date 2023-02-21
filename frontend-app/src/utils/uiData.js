import {
  CreditCardIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  ArrowPathIcon,
  WrenchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { DashboardOutlined, HelpOutline } from "@mui/icons-material";

import checkBook from "../assets/img/checkBook.png";
import creditCard from "../assets/img/creditCard.png";
import moneyBox from "../assets/img/moneyBox.png";

// navigation links data
export const navLinks = [
  {
    key: "overview",
    name: "Overview",
    icon: DashboardOutlined,
    to: "/overview",
  },
  {
    key: "accounts",
    name: "Accounts",
    icon: CreditCardIcon,
    to: "/accounts",
  },
  {
    key: "transfer",
    name: "Pay & Transfer",
    icon: ArrowsRightLeftIcon,
    to: "/transfer",
  },
  {
    key: "deposit",
    name: "Deposit",
    icon: BanknotesIcon,
    to: "/deposit",
  },
  {
    key: "transactions",
    name: "Transactions",
    icon: ArrowPathIcon,
    to: "/transactions",
  },
  {
    key: "profile",
    name: "Profile",
    icon: UserIcon,
    to: "/profile",
  },
  {
    key: "settings",
    name: "Settings",
    icon: WrenchIcon,
    to: "/settings",
  },
  {
    key: "help",
    name: "Get Help",
    icon: HelpOutline,
    to: "/help",
  },
];

// account summary data
export const acctSummary = [
  {
    key: 10,
    acctType: "Checking",
    acctBal: "$8,450.10",
    acctNo: "*7786",
    desc: "Available",
    img: checkBook,
    alt: "check-book",
  },
  {
    key: 15,
    acctType: "Savings",
    acctBal: "$19,885.85",
    acctNo: "*7361",
    desc: "Available",
    img: moneyBox,
    alt: "money-box",
  },
  {
    key: 20,
    acctType: "Credit Card",
    acctBal: "$2,950.03",
    acctNo: "*7098",
    desc: "Outstanding",
    img: creditCard,
    alt: "credit-card",
  },
];

// chart data
export const ChartData = [
  {
    id: 1,
    month: "Jan",
    amtSpent: 7245.65,
    amtEarned: 8350,
  },
  {
    id: 2,
    month: "Feb",
    amtSpent: 5400.53,
    amtEarned: 8940,
  },
  {
    id: 3,
    month: "Mar",
    amtSpent: 20485.02,
    amtEarned: 11050,
  },
  {
    id: 4,
    month: "Apr",
    amtSpent: 16677.95,
    amtEarned: 18650,
  },
  {
    id: 5,
    month: "May",
    amtSpent: 7365.45,
    amtEarned: 3450,
  },
  {
    id: 6,
    month: "Jun",
    amtSpent: 4950.2,
    amtEarned: 8450.15,
  },
  {
    id: 7,
    month: "Jul",
    amtSpent: 5900.05,
    amtEarned: 5460.72,
  },
  {
    id: 8,
    month: "Aug",
    amtSpent: 7365.25,
    amtEarned: 7240.85,
  },
  {
    id: 9,
    month: "Sep",
    amtSpent: 4935.29,
    amtEarned: 4800.0,
  },
  {
    id: 10,
    month: "Oct",
    amtSpent: 2395.94,
    amtEarned: 3590.65,
  },
  {
    id: 11,
    month: "Nov",
    amtSpent: 1390.23,
    amtEarned: 7205.38,
  },
  {
    id: 12,
    month: "Dec",
    amtSpent: 8345.0,
    amtEarned: 7585.23,
  },
];

// table header data
export const COLUMNS = [
  {
    Header: "Account",
    accessor: "account",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Details",
    accessor: "details",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Balance",
    accessor: "balance",
  },
];

// sign-up form data
export const SIGNUP_VALUES = [
  {
    title: "Create login",
    values: [
      {
        id: 1,
        type: "text",
        placeholder: "Username",
      },
      {
        id: 2,
        type: "password",
        placeholder: "Password",
      },
      {
        id: 3,
        type: "password",
        placeholder: "Confirm password",
      },
    ],
  },
  {
    title: "Personal info",
    values: [
      {
        id: 40,
        type: "text",
        placeholder: "Title",
      },
      {
        id: 4,
        type: "text",
        placeholder: "First name",
      },
      {
        id: 5,
        type: "text",
        placeholder: "Middle initial",
      },
      {
        id: 6,
        type: "text",
        placeholder: "Last name",
      },
      {
        id: 7,
        type: "text",
        placeholder: "Maiden name",
      },
      {
        id: 8,
        type: "date",
        placeholder: "Date of birth",
      },
      {
        id: 9,
        type: "text",
        placeholder: "Account holder SSN",
      },
    ],
  },
  {
    title: "Contact info",
    values: [
      {
        id: 10,
        type: "text",
        placeholder: "Street address",
      },
      {
        id: 11,
        type: "text",
        placeholder: "Country",
      },
      {
        id: 12,
        type: "text",
        placeholder: "State",
      },
      {
        id: 13,
        type: "text",
        placeholder: "City",
      },
      {
        id: 14,
        type: "text",
        placeholder: "Zip code",
      },
      {
        id: 15,
        type: "text",
        placeholder: "Email address",
      },
      {
        id: 16,
        type: "text",
        placeholder: "Primary phone no.",
      },
      {
        id: 17,
        type: "text",
        placeholder: "Secondary phone",
      },
    ],
  },
];

export const ACCT_TYPE = [
  {
    id: 1,
    name: "Please choose an account",
    value: "",
  },
  {
    id: 2,
    name: "Savings account",
    value: "savings",
  },
  {
    id: 3,
    name: "Checking account",
    value: "checking",
  },
  {
    id: 4,
    name: "Individual retirement account",
    value: "retirement",
  },
  {
    id: 5,
    name: "Money market account",
    value: "money-market",
  },
];

export const FISCAL_YEAR = [
  {
    id: 6,
    name: "Select year",
    value: "",
  },
  {
    id: 7,
    name: "2022",
    value: 2022,
  },
  {
    id: 8,
    name: "2021",
    value: 2021,
  },
  {
    id: 9,
    name: "2020",
    value: 2020,
  },
  {
    id: 10,
    name: "2019",
    value: 2019,
  },
  {
    id: 11,
    name: "2018",
    value: 2018,
  },
];
