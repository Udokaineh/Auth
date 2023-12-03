import FirebaseInitializing from "./FirebaseInitializing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return(
    <Router>
      <FirebaseInitializing />
      <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
