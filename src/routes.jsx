import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CommentPage from "./pages/CommentPage";
import BranchPage from "./pages/BranchPage";
import ContactPage from "./pages/ContactPage";
import { MainLayout } from "@/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/comments",
        element: <CommentPage />,
      },
      {
        path: "/branch",
        element: <BranchPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
