import "./App.css";
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/SIgnin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Landing } from "./pages/Landing";
import { Layout } from "./components/layout/Layout";

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout variant="hero">
                <Landing />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout variant="subtle">
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/signin"
            element={
              <Layout variant="subtle">
                <Signin />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout variant="subtle">
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout variant="subtle">
                <Blogs />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
