import "./App.css";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
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
    <HashRouter >
      <Routes >
      <Route path="/" element={<HomePage />} /> 
      <Route path="/qfremit/#/about" element={<AboutUs />} /> 
      <Route path="/qfremit/#/process" element={<Process />} /> 
      <Route path="/qfremit/#/login" element={<Login />} />
      <Route path="/qfremit/#/forgotpassword" element={<ForgotPassword />} />
      <Route path="/qfremit/#/signup" element={<SignUp />} />
      <Route path="/qfremit/#/resend-link" element={<ResetLinkSent />} />
      <Route path="/qfremit/#/reset-password" element={<ResetPassword />} />
      <Route path="/qfremit/#/password-redirect" element={<PasswordRedirect />} />
      <Route path="/qfremit/#/termsandconditions" element={<TermsAndConditions />} /> 
      <Route path="/qfremit/#/privacypolicy" element={<PrivacyPolicy />} /> 
      <Route path="/qfremit/#/disclaimer" element={<Disclaimer />} /> 
      <Route path="/qfremit/#/faq" element={<Faq />} /> 
      </Routes>
      </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

