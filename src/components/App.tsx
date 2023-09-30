import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignUpToken from "../pages/SignUpToken";
import SignIn from "../pages/SignIn";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Home page</p>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/receive-token" element={<SignUpToken />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
