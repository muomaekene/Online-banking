import {
  CreditCardIcon,
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  WrenchIcon,
  UserIcon,
  ArrowTrendingUpIcon,
  BuildingLibraryIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
  Bars3CenterLeftIcon,
  UserCircleIcon,
  UserPlusIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import moneyBox from "../assets/images/moneyBox.png";
import creditCard from "../assets/images/creditCard.png";
import checkBook from "../assets/images/checkBook.png";

export const navLinks = [
  {
    key: "overview",
    name: "Overview",
    icon: Bars3CenterLeftIcon,
    to: "/overview",
  },
  {
    key: "accounts",
    name: "Accounts",
    icon: BuildingLibraryIcon,
    to: "/accounts",
  },
  {
    key: "transfer",
    name: "Transfer & payments",
    icon: ArrowsRightLeftIcon,
    to: "/transfers",
  },

  {
    key: "transactions",
    name: "Transactions",
    icon: ArrowPathIcon,
    to: "/transactions",
  },
  {
    key: "analytics",
    name: "Analytics",
    icon: ArrowTrendingUpIcon,
    to: "/analytics",
  },
  {
    key: "cards",
    name: "Virtual cards",
    icon: CreditCardIcon,
    to: "/cards",
  },
  {
    key: "profile",
    name: "Manage profile",
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
    name: "Help & support",
    icon: QuestionMarkCircleIcon,
    to: "/help",
  },
];

export const accountInfo = [
  {
    key: 10,
    name: "checking",
    type: "Total Checking",
    bal: "$467,720.83",
    desc: "Available bal",
    img: checkBook,
    alt: "check-book",
    msg: "Cummulative balance on all your checking accounts",
  },
  {
    key: 15,
    name: "savings",
    type: "Total Savings",
    bal: "$8,450.10",
    desc: "Available bal",
    img: moneyBox,
    alt: "money-box",
    msg: "Cummulative balance on all your savings accounts",
  },
  {
    key: 20,
    name: "cc",
    type: "Credit cards",
    bal: "$49,940.06",
    desc: "Outstanding bal",
    img: creditCard,
    alt: "credit-card",
    msg: "Total amount you owe on all your credit cards",
  },
];

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
  },
  {
    id: 11,
    month: "Nov",
  },
  {
    id: 12,
    month: "Dec",
  },
];

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
    Header: "Description",
    accessor: "description",
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

// export const CHOOSE_ACCT = [
//   {
//     id: 1,
//     name: "Please choose an account",
//     value: "",
//   },
//   {
//     id: 2,
//     name: "SmartPlus Savings",
//     value: "savings",
//   },
//   {
//     id: 3,
//     name: "SmartPlus Checking",
//     value: "checking",
//   },
//   {
//     id: 4,
//     name: "Individual retirement account",
//     value: "retirement",
//   },
//   {
//     id: 5,
//     name: "Money market account",
//     value: "money-market",
//   },
// ];

export const FISCAL_YEAR = [
  {
    id: 6,
    name: "2023",
    value: "2023",
  },
  {
    id: 7,
    name: "2022",
    value: "2022",
  },
  {
    id: 8,
    name: "2021",
    value: "2021",
  },
  {
    id: 9,
    name: "2020",
    value: "2020",
  },
  {
    id: 10,
    name: "2019",
    value: "2019",
  },
];

// export const ACCOUNT_TYPE = [
//   {
//     id: 25,
//     name: "Transfer from",
//     value: "",
//   },
//   {
//     id: 26,
//     name: "Savings",
//     value: "savings",
//   },
//   {
//     id: 27,
//     name: "Checking",
//     value: "checking",
//   },
//   {
//     id: 28,
//     name: "Credit card",
//     value: "credit-card",
//   },
// ];

export const profileDropdown = [
  {
    title: "Edit profile",
    icon: UserPlusIcon,
    to: "/profile",
  },
  {
    title: "Settings",
    icon: Cog6ToothIcon,
    to: "/settings",
  },
  {
    title: "Get help",
    icon: QuestionMarkCircleIcon,
    to: "/help",
  },
  {
    title: "Logout",
    icon: ArrowLeftOnRectangleIcon,
    to: "/login",
  },
];

export const notificationsDropdown = [
  {
    title: "New credit alert!",
    icon: UserCircleIcon,
    message: "Dear customer, you just...",
    time: "12:02 am",
  },
  {
    title: "Terms update!",
    icon: UserCircleIcon,
    message: "Dear customer, we have...",
    time: "10:13 pm",
  },
  {
    title: "New offer!",
    icon: UserCircleIcon,
    message: "Congratulations, your account...",
    time: "5:27 pm",
  },
];

export const messagesDropdown = [
  {
    title: "Ellie",
    icon: UserCircleIcon,
    message: "Hey, I need you to confirm...",
    time: "9:16 am",
  },
  {
    title: "Oliver Eckert",
    icon: UserCircleIcon,
    message: "I have just sent some funds to...",
    time: "11:10 am",
  },
  {
    title: "Jon Schwab",
    icon: UserCircleIcon,
    message: "Good day, please when am I...",
    time: "11:10 am",
  },
];

export const YEARS = [2024, 2023, 2022, 2021, 2020];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const ACCOUNTS_OWNED = [
  "SmartPlus Savings (...9792)",
  "SmartPlus Checking (...9792)",
  "Venture Rewards Visa Card (...5632)",
  "Customized Cash Rewards Visa Card (...5376)",
];

export const ACCOUNTS_AVAILABLE = [
  {
    id: 10,
    name: "Smart Savings",
    category: "savings",
    description: "This smart option covers all your savings essentials.",
    category: "savings",
    features: [
      "It works great as a secondary savings account",
      "You'll enjoy a base rate of interest with no nonsense",
    ],
  },
  {
    id: 11,
    name: "SmartPlus Savings",
    category: "savings",
    description: "It’s a smart savings account that earns you interest.",
    features: [
      "7.00% APY on your first $500 in balances",
      "You can use this account to establish membership (with a $5 deposit)",
    ],
  },
  {
    id: 12,
    name: "Smart Checking",
    category: "checking",
    description: "This hassle-free checking account covers all your basics.",
    features: [
      "This account is great to use as a secondary checking account",
      "There are no monthly fees, ever",
    ],
  },
  {
    id: 13,
    name: "SmartPlus Checking",
    category: "checking",
    description: "This smart option covers all your savings essentials.",
    features: [
      "5.00% APY on your first $5,000 in balances",
      "Enjoy speedy and free ATM fee refunds nationwide",
    ],
  },
  {
    id: 14,
    name: "Fixed Certificate",
    category: "others",
    description: "Fixed CD’s offer you a reliable way to secure savings..",
    features: [
      "Higher interest rate paid without early withdrawal fees",
      "Money stays in the account for a specific amount of time before accessing",
    ],
  },
  {
    id: 15,
    name: "Bump Certificates",
    category: "others",
    description: "Bump CDs offer you the flexibility to maximize savings.",
    features: [
      "We offer a variety of term options to best support your savings goals",
      "Access a one-time rate increase during the term of your Certificate",
    ],
  },
  {
    id: 16,
    name: "Fixed Term CD IRA",
    category: "others",
    description:
      "This Certificate of Deposit helps you manage your retirement savings.",
    features: [
      "It works great as a secondary savings account",
      "You'll enjoy a base rate of interest with no nonsense",
    ],
  },
  {
    id: 17,
    name: "SmartPlus Investment IRA",
    category: "others",
    description:
      "If you have saved up money for your retirement, you could invest it.",
    features: [
      "It works great as a secondary savings account",
      "You'll enjoy a base rate of interest with no nonsense",
    ],
  },
];

export const btnList = [
  { id: "all", name: "All" },
  { id: "savings", name: "Savings" },
  { id: "checking", name: "Checking" },
  { id: "others", name: "IRAs & CDs" },
];

export const TRANSFER_DATA = [
  {
    title: "Make An Internal Transfer",
    description: "Manage money between your U.S. bank accounts",
    action: "Transfer Money",
  },
  {
    title: "Make An External Transfer",
    description:
      "Transfer money between your U.S. bank accounts and external accounts",
    action: "Transfer Money",
  },
  {
    title: "Send A Wire Transfer",
    description:
      "Transfer large sums of money to another person anywhere in the world",
    action: "Send A Wire",
  },
  {
    title: "Manage & Pay Bills",
    description: "Pay your bills and always stay on track with your spending",
    action: "Pay Bills",
  },
];
