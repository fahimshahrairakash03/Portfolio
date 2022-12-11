import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Peterbilt from "./Projects/Peterbilt";
import Quiz from "./Projects/Quiz";
import Roots from "./Projects/Roots";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/peterbilt",
          element: <Peterbilt></Peterbilt>,
        },
        {
          path: "/root",
          element: <Roots></Roots>,
        },
        {
          path: "/quiz",
          element: <Quiz></Quiz>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
