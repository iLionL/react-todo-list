import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routers = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts:id', element:< PostIdPage/>, exact: true},
    {path: '/error', element: <ErrorPage/>, exact: true},

]