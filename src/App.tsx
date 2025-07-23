import { Toaster } from "sonner";
import { lazy, Suspense } from "react";

import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingPage from "./components/LoadingPage";

import MainProvider from "./providers/MainProvider";
import { BrowserRouter, Route, Routes } from "react-router";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const OverviewPage = lazy(() => import("./pages/OverviewPage"));
const UsersManagementPage = lazy(() => import("./pages/UsersManagementPage"));
const OrdersManagementPage = lazy(() => import("./pages/OrdersManagementPage"));
const PricingPlanPage = lazy(() => import("./pages/PricingPlanPage"));
const CategoriesManagementPage = lazy(
  () => import("./pages/CategoriesManagementPage")
);

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
        <Suspense fallback={<LoadingPage />}>
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
        </Suspense>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
