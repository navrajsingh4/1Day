import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestUserManagement from "./pages/GuestUserManagement"; // Assuming the pages/ folder

function App() {


  return (
    <>
      <BrowserRouter>
        {/* ... other routes ... */}
        <Routes>
          {/* ... other route definitions ... */}
          <Route path="/guest-management/*" element={<GuestUserManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
