import "./App.css";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Login from "./components/authentication/login/login";
import ForgotPassword from "./components/authentication/forgotPassword/forgotpassword";
import SignUp from "./components/authentication/signup/signup";
import ResetLinkSent from "./components/authentication/resend-link/resend-link";
import ResetPassword from "./components/authentication/reset-password/reset-password";
import PasswordRedirect from "./components/authentication/password-redirect/password-redirect";
import HomePage from "./components/homepage";
import TermsAndConditions from "./components/homepage/termsandconditions/termsandconditions";
import Disclaimer from "./components/homepage/disclaimer/disclaimer";
import PrivacyPolicy from "./components/homepage/privacypolicy/privacypolicy";
import AboutUs from "./components/homepage/aboutUs/about-us";
import Process from "./components/homepage/process/process";
import Faq from "./components/homepage/faq/faq";




export default function App() {
  return (
    <BrowserRouter>
      <Routes >
      <Route path="/" element={<HomePage />} /> 
      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/process" element={<Process />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resend-link" element={<ResetLinkSent />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/password-redirect" element={<PasswordRedirect />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} /> 
      <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
      <Route path="/disclaimer" element={<Disclaimer />} /> 
      <Route path="/faq" element={<Faq />} /> 
      </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

