import {
  CreditCardIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
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
    name: "Payments & transfers",
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
    type: "Checking",
    bal: "$8,450.10",
    number: "*7786",
    desc: "Total available bal",
    img: checkBook,
    alt: "check-book",
  },
  {
    key: 15,
    type: "Savings",
    bal: "$19,885.85",
    number: "*7361",
    desc: "Total available bal",
    img: moneyBox,
    alt: "money-box",
  },
  {
    key: 20,
    type: "Credit card",
    bal: "$2,950.03",
    number: "*7098",
    desc: "Outstanding bal",
    img: creditCard,
    alt: "credit-card",
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

export const CHOOSE_ACCT = [
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

export const ACCOUNT_TYPE = [
  {
    id: 25,
    name: "Transfer from",
    value: "",
  },
  {
    id: 26,
    name: "Savings",
    value: "savings",
  },
  {
    id: 27,
    name: "Checking",
    value: "checking",
  },
  {
    id: 28,
    name: "Credit card",
    value: "credit-card",
  },
];

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
    title: "Melinda Brown",
    icon: UserCircleIcon,
    message: "Hey, I need yout to confirm...",
    time: "9:16 am",
  },
  {
    title: "Oliver Eckert",
    icon: UserCircleIcon,
    message: "I have just sent some funds to...",
    time: "11:10 am",
  },
  {
    title: "Ekene Muoma",
    icon: UserCircleIcon,
    message: "Good day, please when am I...",
    time: "11:10 am",
  },
];
