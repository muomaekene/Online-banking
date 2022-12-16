import {
  RectangleGroupIcon,
  WalletIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  ArrowsUpDownIcon,
  WrenchIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const navLinks = [
  {
    key: "overview",
    name: "Overview",
    icon: RectangleGroupIcon,
    to: "/overview",
  },
  {
    key: "accounts",
    name: "Accounts",
    icon: WalletIcon,
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
    icon: ArrowsUpDownIcon,
    to: "/transactions",
  },
  {
    key: "settings",
    name: "Settings",
    icon: WrenchIcon,
    to: "/settings",
  },
  {
    key: "profile",
    name: "Profile",
    icon: UserIcon,
    to: "/profile",
  },
];
