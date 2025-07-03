import ProtectedRoute from "./components/ProtectedRoute";
import Overview from "./pages/Overview";
import MainProvider from "./providers/MainProvider";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Overview />} />
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
