import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/login/login";
import ForgotPassword from "./components/authentication/forgotPassword/forgotpassword";
import SignUp from "./components/authentication/signup/signup";
import ResetLinkSent from "./components/authentication/resend-link/resend-link";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resend-link" element={<ResetLinkSent />} />
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

