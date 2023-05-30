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
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AddPizza from "./pages/AddPizza";
import EditPizza from "./pages/EditPizza";
import { MyContextProvider } from "./context/MyContext";

function App() {
  return (
    <main className="w-full mx-auto h-full">
      <AuthProvider>
        <MyContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />

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
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                  {/*a renderização da página Admin está protegida e só executa se user esta logado*/}
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/admin/add-pizza"
              element={
                <ProtectedRoute>
                  <AddPizza />
                  {/*a renderização da página AddProduct está protegida e só executa se user esta logado*/}
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/admin/edit-pizza/:id"
              element={
                <ProtectedRoute>
                  <EditPizza />
                  {/*a renderização da página AddProduct está protegida e só executa se user esta logado*/}
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </MyContextProvider>
      </AuthProvider>
    </main>
  );
}

export default App;
