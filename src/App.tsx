import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import Overview from "./pages/Overview";
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
