import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Pricing from "./pages/pricing";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Common elements go here */}
      </header>
      <Router>
        <nav>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
