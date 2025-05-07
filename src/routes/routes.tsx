import { createBrowserRouter } from "react-router"

/* Pages */
import HomePage from "../pages/home/HomePage"
import LinkTreePage from "../pages/LinkTreePage"
import AboutPage from "../pages/AboutPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/tree",
        element: <LinkTreePage/>
    },
    {
        path: "/sobre",
        element: <AboutPage/>
    }
])

export default router