import { Navigate, Route, Routes } from "react-router-dom";

import OverviewPage from "./pages/OverviewPage";
import AccountsPage from "./pages/AccountsPage";
import DepositPage from "./pages/DepositPage";
import TransferPage from "./pages/TransferPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageNotFound from "./pages/PageNotFound";

import AllAccountsPage from "./pages/AllAccountsPage";
import AccountStatementsPage from "./pages/AccountStatementsPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccountDetailsPage from "./pages/AccountDetailsPage";
import LearnMorePage from "./pages/LearnMorePage";
import CheckoutPage from "./pages/CheckoutPage";

import AllTransfers from "./pages/AllTransfers";
import InternalTransferPage from "./pages/InternalTransferPage";
import ExternalTransferPage from "./pages/ExternalTransferPage";
import WireTransferPage from "./pages/WireTransferPage";
import PayBillsPage from "./pages/PayBillsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="overview" />} />
      <Route path="overview" element={<OverviewPage />} />

      <Route path="accounts" element={<AccountsPage />}>
        <Route index element={<Navigate to="all" />} />
        <Route path="all" element={<AllAccountsPage />} />
        <Route path="all/:id" element={<AccountDetailsPage />} />
        <Route path="statements" element={<AccountStatementsPage />} />
        <Route path="open-new-account" element={<CreateAccountPage />} />
        <Route path="open-new-account/:id" element={<LearnMorePage />} />
        <Route path="open-new-account/checkout" element={<CheckoutPage />} />
      </Route>

      <Route path="transfers" element={<TransferPage />}>
        <Route index element={<AllTransfers />} />
        <Route path="internal-transfer" element={<InternalTransferPage />} />
        <Route path="external-transfer" element={<ExternalTransferPage />} />
        <Route path="wire-transfer" element={<WireTransferPage />} />
        <Route path="pay-bills" element={<PayBillsPage />} />
      </Route>

      <Route path="deposit" element={<DepositPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="help" element={<HelpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="create-profile" element={<SignupPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
