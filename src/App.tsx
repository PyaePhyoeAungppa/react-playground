import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Theme from "./layout/Theme";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Theme />}>
        <Route path="/home" element={<Home />} />

          </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
