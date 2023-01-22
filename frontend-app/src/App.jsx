import { Navigate, Route, Routes } from "react-router-dom";

import Overview from "./pages/Overview";
import Accounts from "./pages/Accounts";
import Deposit from "./pages/Deposit";
import Transfer from "./pages/Transfers";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Help from "./pages/Help";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
