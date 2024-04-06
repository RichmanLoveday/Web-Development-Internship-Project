import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../ui/AppLayout";
import Login from "./pages/Login";
import ConfirmEmail from "./pages/ConfirmEmail";
import { Profile } from "./pages/Profile";
import { WhatBringsYou } from "./pages/WhatBringYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="confirmEmail" element={<ConfirmEmail />}></Route>
        </Route>
        <Route index element={<Navigate replace to="login" />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="what_brings_you" element={<WhatBringsYou />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
