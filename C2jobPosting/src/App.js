import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { AdminPage } from "./Components/features/admin/AdminPage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <AdminPage /> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}
