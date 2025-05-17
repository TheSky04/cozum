import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout isMobile={isMobile} />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home isMobile={isMobile} /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
