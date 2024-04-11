// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestUserManagement from "./components/GuestUserManagement"; // Ensure the path is correct based on your file structure

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ...other routes... */}
        <Route path="/guest-management/*" element={<GuestUserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
