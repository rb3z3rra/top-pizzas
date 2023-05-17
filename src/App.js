import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cardapio from "./pages/Cardapio";
import Contato from "./pages/Contato";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full mx-auto h-auto">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cardapio"
            element={
              <ProtectedRoute>
                <Cardapio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contato"
            element={
              <ProtectedRoute>
                <Contato />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </main>
  );
}

export default App;
