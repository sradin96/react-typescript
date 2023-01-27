import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Home from "./components/Pages/Home";

function App() {
  const [user, setUser] = useState('user');

  return (
    <>
      <Routes>
        <Route path="/home" element={
          <PrivateRoute user={user} >
            <Home />
          </PrivateRoute>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
