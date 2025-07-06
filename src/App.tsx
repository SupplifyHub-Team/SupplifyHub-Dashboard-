import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import CategoriesManagementPage from "./pages/CategoriesManagementPage";
import LoginPage from "./pages/LoginPage";
import OrdersManagementPage from "./pages/OrdersManagementPage";
import Overview from "./pages/Overview";
import PricingPlanPage from "./pages/PricingPlanPage";
import UsersManagementPage from "./pages/UsersManagementPage";
import MainProvider from "./providers/MainProvider";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Overview />} />
              <Route
                path="/user-management"
                element={<UsersManagementPage />}
              />

              <Route path="/orders" element={<OrdersManagementPage />} />
              <Route path="/pricing" element={<PricingPlanPage />} />
              <Route
                path="/categories"
                element={<CategoriesManagementPage />}
              />
            </Route>
          </Route>

          <Route
            path="*"
            element={<div className="min-h-screen">Page Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
