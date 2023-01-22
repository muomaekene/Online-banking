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

export const acctSummary = [
  {
    key: 10,
    acctType: "Checking",
    acctBal: "$8,450.10",
    desc: "Available",
    img: checkBook,
    alt: "check-book",
  },
  {
    key: 15,
    acctType: "Savings",
    acctBal: "$19,885.85",
    desc: "Available",
    img: moneyBox,
    alt: "money-box",
  },
  {
    key: 20,
    acctType: "Credit Card",
    acctBal: "$2,950.03",
    desc: "Outstanding",
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
