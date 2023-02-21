import { Navigate, Route, Routes } from "react-router-dom";

import OverviewPage from "./pages/OverviewPage";
import AccountsPage from "./pages/AccountsPage";
import DepositPage from "./pages/DepositPage";
import TransferPage from "./pages/TransferPage";
import TransactionsPage from "./pages/TransactionsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/accounts" element={<AccountsPage />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/deposit" element={<DepositPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<SignupPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
