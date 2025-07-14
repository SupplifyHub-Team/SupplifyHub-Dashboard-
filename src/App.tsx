import { Toaster } from "sonner";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import CategoriesManagementPage from "./pages/CategoriesManagementPage";
import LoginPage from "./pages/LoginPage";
import OrdersManagementPage from "./pages/OrdersManagementPage";
import OverviewPage from "./pages/OverviewPage";
import PricingPlanPage from "./pages/PricingPlanPage";
import UsersManagementPage from "./pages/UsersManagementPage";
import MainProvider from "./providers/MainProvider";
import { BrowserRouter, Route, Routes } from "react-router";


function App() {
 
  
  return (
    <MainProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{ duration: 3000 }}
          style={
            {
              "--normal-bg": "var(--primary)",
              "--normal-text": "white",
              "--normal-border": "var(--primary-foreground)",
            } as React.CSSProperties
          }
        />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<OverviewPage />} />
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
