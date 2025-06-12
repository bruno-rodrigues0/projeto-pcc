import { createBrowserRouter } from "react-router"

/* Pages */
import HomePage from "../pages/home/HomePage"
import LinkTreePage from "../pages/LinkTreePage"
import AboutPage from "../pages/AboutPage"
import GalleryPage from "../pages/GalleryPage"
import TeamPage from "../pages/Team/TeamPage"
import NewsPage from "../pages/news/NewsPage"

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
    },
    {
        path: "/integrantes",
        element: <TeamPage/>
    },
])

export default router