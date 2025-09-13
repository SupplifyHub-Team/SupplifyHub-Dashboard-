import { Toaster } from "sonner";
import { lazy, Suspense } from "react";

import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingPage from "./components/LoadingPage";

import MainProvider from "./providers/MainProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import AdvsManagementPage from "./pages/AdvsManagementPage";
import ProductsManagementPage from "./pages/ProductsManagementPage";
import DealsManagementPage from "./pages/DealsManagementPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthRoute from "./components/AuthRoute";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const OverviewPage = lazy(() => import("./pages/OverviewPage"));
const UsersManagementPage = lazy(() => import("./pages/UsersManagementPage"));
const OrdersManagementPage = lazy(() => import("./pages/OrdersManagementPage"));
const PricingPlanPage = lazy(() => import("./pages/PricingPlanPage"));
const CategoriesManagementPage = lazy(
  () => import("./pages/CategoriesManagementPage")
);
const BlogsManagementPage = lazy(() => import("./pages/BlogsManagement"));

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
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/" element={<OverviewPage />} />
                <Route
                  path="/user-management"
                  element={<UsersManagementPage />}
                />

                <Route path="/orders" element={<OrdersManagementPage />} />
                <Route path="/pricing" element={<PricingPlanPage />} />
                <Route path="/advs" element={<AdvsManagementPage />} />
                <Route path="/deals" element={<DealsManagementPage />} />

                <Route path="/products" element={<ProductsManagementPage />} />

                <Route
                  path="/categories"
                  element={<CategoriesManagementPage />}
                />
                <Route path="/blogs" element={<BlogsManagementPage />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
