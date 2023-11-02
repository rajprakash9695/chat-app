import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Search from "./components/Search";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log("log:currentUser", currentUser);

  const ProtectedRoute = ({ childern }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return childern;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
