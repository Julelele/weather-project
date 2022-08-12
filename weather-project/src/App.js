import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
