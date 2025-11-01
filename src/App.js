import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/user/101">User 101</Link> | 
        <Link to="/user/202">User 202</Link> | 
        <Link to="/user/303">User 303</Link>
      </nav>

      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
