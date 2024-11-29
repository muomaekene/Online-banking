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
  "Prime Share Savings (...9792)",
  "Smart Rewards Checking (...9792)",
  "Venture Rewards Visa Card (...5632)",
  "Customized Cash Rewards Visa Card (...5376)",
];

export const ACCOUNTS_AVAILABLE = [
  {
    id: "smart-track-checking",
    name: "Smart Track Checking",
    category: "Checking",
    sc_description:
      "Your best interest checking account option for higher balances.",
    mn_description:
      "Take advantage of all the benefits of our premium value checking account, including high interest on your balance.",
    benefits: [
      "Earn dividends with a daily balance of at least $2,500",
      "No direct deposit requirements ",
      "4 free withdrawals per month at any non-shared ATMs",
    ],
  },
  {
    id: "share-cd",
    name: "Share Certificate of Deposit",
    category: "Cd",
    sc_description: "Lock in our best yields on your terms.",
    mn_description:
      "Similar to CDs, share certificates earn credit union shareholders a guaranteed return when you lock in for a specific term.",
    benefits: [
      "$1,000 – $50,000 deposits",
      "3-month to 5-year terms",
      "You can use this account to establish membership (with a $5 deposit)",
    ],
  },
  {
    id: "regular-savings",
    name: "Regular Savings",
    category: "Savings",
    sc_description: "The basics only, except this is better.",
    mn_description:
      "The starter savings account for every First Florida Credit Union member, Regular Savings opens the door to a wealth of value-added products and services. This bank account is a basic financial product offered by First Florida Credit Union that allows individuals to deposit money securely while earning interest on their balance. It provides easy access to funds, with the option to withdraw or transfer money at any time, subject to any bank-specific conditions. The account typically has a low minimum balance requirement and earns interest, although the interest rate is usually lower compared to other savings options like certificates of deposit or high-yield savings accounts. Our Regular savings account is insured by the FDIC up to a certain limit, ensuring the safety of the deposited funds. This account is ideal for individuals seeking a safe place to store their money while earning some interest over time.",
    benefits: [
      "Easy access via ATM, online banking, mobile banking or phone",
      "$10 minimum deposit to open (includes one-time $9 membership fee)",
      "No monthly service charge",
    ],
    rates: [
      {
        balance: "$25-$99.99",
        dividend_rate: "0.050%",
        apy: "0.05%",
      },
      {
        balance: "More than $99",
        dividend_rate: "0.050%",
        apy: "0.05%",
      },
    ],
    rates_date: "11/20/2024",
  },
  {
    id: "premium-interest-checking",
    name: "Premium Interest Checking",
    category: "Checking",
    sc_description: "Interest checking accounts made easy.",
    mn_description:
      "Keep a low minimum daily balance of just $750, and this interest-bearing checking account will pay you dividends with every check you write.",
    benefits: [
      "Earn dividends with a daily balance of at least $750",
      "No direct deposit requirements",
      "6 free withdrawals per month at any non-shared ATMs",
    ],
  },
  {
    id: "smart-rewards-checking",
    name: "Smart Rewards Checking",
    category: "Checking",
    sc_description:
      "Open our most popular checking account online with just a $25 deposit.",
    mn_description:
      "Enjoy the ease of no minimum balance and a low opening deposit with this best-of-the-basics free checking account.",
    benefits: [
      "Get mobile banking, free bill pay and more with no monthly service fee",
      "No balance or direct deposit requirements",
      "10 free withdrawals per month at any non-shared ATMs",
    ],
  },
  {
    id: "student-checking",
    name: "Student Checking",
    category: "Checking",
    sc_description: "Trojans, financial independence starts here.",
    mn_description:
      "Our student checking account fits you, your budget and your FFCU campus life.",
    benefits: [
      "Maintain your account with no minimum daily balance",
      "No monthly service charges",
      "2 free withdrawals per month at any non-shared ATMs",
    ],
  },
  {
    id: "prime-share-savings",
    name: "Prime Share Savings",
    category: "Savings",
    sc_description: "Get a complete banking experience with high-interest.",
    mn_description:
      "A Prime Share/Savings Account is a perfect vehicle to save for whatever you choose. Whether it’s for vacation, education, or a vehicle, you’ll be able to designate and name your account to serve its purpose. This account offers all that and more.",
    benefits: [
      "24/7 deposits and withdrawals",
      "Peace of mind knowing your money is safe and insured",
      "Earn dividends on balances of $25 or more",
    ],
  },
  {
    id: "business-savings",
    name: "Business Savings",
    category: "Business",
    sc_description: "Grow your business savings.",
    mn_description:
      "The starter cushion account for every USC Credit Union business member to save for taxes, new investments, future projects, and unexpected expenses.",
    benefits: [
      "$10 minimum deposit to open (includes one-time $9 membership fee)",
      "Earn dividends on balances of $1,000 or more",
      "All deposits are safe and insured by the FDIC",
      "Easy access to funds",
    ],
  },
  {
    id: "business-checking",
    name: "Business Checking",
    category: "Business",
    sc_description: "Streamline your cash flow with just a $200 deposit.",
    mn_description:
      "Manage day-to-day operating expenses, payroll, and income with a business checking account3 that covers the essentials.",
    benefits: [
      "Free online and mobile banking, bill pay, budgeting tools, and more",
      "100 free transactions per month at no-fee ATMs",
      "All deposits are safe and insured by the FDIC",
      "Easy access to funds",
    ],
  },

  {
    id: "platinum-mma",
    name: "Platinum Money Market Account",
    category: "Savings",
    sc_description: "High-interest savings account with easy access.",
    mn_description:
      "Keep your earnings high and your assets liquid with a First Florida Credit Union Money Market account. Our tiered dividend structure rewards higher balances with higher yields. Choose a lower deposit minimum option or a higher minimum to earn more.",
    benefits: [
      "Choose your initial minimum deposit: $25,000 or $50,000",
      "6 withdrawals per month",
      "Low penalty fees for early withdrawal",
      "Enjoy a higher interest rate",
    ],
  },
  {
    id: "business-mma",
    name: "Business Money Market Account",
    category: "Business",
    sc_description: "High-interest account with easy access.",
    mn_description:
      "Get even more from your surplus cash. Business Money Market Accounts1 offer the flexibility and growth your business needs to thrive.",
    benefits: [
      "$10,000 minimum initial deposit",
      "6 free withdrawals per month*",
      "All deposits are safe and insured by the FDIC",
      "Easy access to funds",
    ],
  },
  {
    id: "traditional-ira",
    name: "Traditional IRA",
    category: "Cd",
    sc_description: "Own your future with an IRA.",
    mn_description:
      "Invest for the years ahead with tax-deductible contributions to an individual retirement account. Save a little at a time and watch your contributions grow tax-deferred until you withdraw them. It’s your future. Own it.",
    benefits: [
      "Pay no monthly service charge",
      "Open with $100 minimum balance (Share) or $1,000 (Certificate)",
      "Contribute up to $7,000 per year if you’re under 50, $8,000 if over 50",
    ],
  },
  {
    id: "high-yield-mma",
    name: "High Yield Money Market Account",
    category: "Savings",
    sc_description: "High-interest savings account with easy access.",
    mn_description:
      "Keep your earnings high and your assets liquid with a First Florida Credit Union Money Market account. Our tiered dividend structure rewards higher balances with higher yields. Choose a lower deposit minimum option or a higher minimum to earn more.",
    benefits: [
      "Choose your initial minimum deposit: $2,500 or $10,000",
      "4 withdrawals per month",
      "Low penalty fees for early withdrawal",
      "Enjoy a higher interest rate",
    ],
  },
  {
    id: "roth-ira",
    name: "Roth IRA",
    category: "Cd",
    sc_description: "Compound your dividends with a Roth IRA.",
    mn_description:
      "Benefit from decades of tax-free, compounded growth with a Roth IRA. When your investments earn interest, that amount gets added to your account balance, compounding your interest and dividends over time.",
    benefits: [
      "Pay no monthly service charge",
      "Open with $100 minimum balance (Share) or $1,000 (Certificate)",
      "Contribute up to $7,000 per year if you’re under 50, $8,000 if over 50",
    ],
  },
  {
    id: "education-savings",
    name: "Coverdell Education Savings",
    category: "Cd",
    sc_description: "Tax-free savings for education at every stage.",
    mn_description:
      "Education can come with a high price tag. Save for it by opening a tax-free Coverdell Education Savings Account (CESA) in the name of a child up to age 181. Also known as an Education IRA, a CESA is a trust or custodial savings account you can use to pay for qualified education expenses, including tuition, books, supplies, equipment, academic tutoring and special needs services. Unlike 529 plans, CESA funds can be used for elementary, secondary or higher education. CESAs also let you direct your investments versus choosing from a menu of options.",
    benefits: [
      "Contribute up to $2,000 per year",
      "Enjoy tax-free growth and withdrawals",
      "Open an unlimited number of CESAs for a designated beneficiary",
    ],
  },
];

export const btnList = [
  { id: "all", name: "All" },
  { id: "Savings", name: "Savings" },
  { id: "Checking", name: "Checking" },
  { id: "Business", name: "Business" },
  { id: "Cd", name: "CDs & IRAs" },
];

export const TRANSFER_DATA = [
  {
    title: "Make An Internal Transfer",
    description: "Manage money between all your First Florida bank accounts",
    action: "Transfer money",
    id: "internal-transfer",
  },
  {
    title: "Make An External Transfer",
    description:
      "Transfer money between your First Florida bank accounts and external accounts",
    action: "Transfer money",
    id: "external-transfer",
  },
  {
    title: "Send A Wire Transfer",
    description:
      "Transfer large sums of money to another person anywhere in the world",
    action: "Send a wire",
    id: "wire-transfer",
  },
  {
    title: "Manage & Pay Bills",
    description: "Pay your bills and always stay on track with your spending",
    action: "Pay bills",
    id: "bill-pay",
  },
];
