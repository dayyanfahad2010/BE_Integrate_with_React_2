import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import SignUpPage from "./pages/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Catch invalid routes */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;