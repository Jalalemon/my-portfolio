import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Allprojects from "../Components/Allprojects";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Learn from "../Components/Learn";
import Linkers from "../Components/Linkers";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills";
import WildLife from "../Components/WildLife";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/allprojects',
                element: <Allprojects></Allprojects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/linkers',
                element:<Linkers></Linkers>
            },
            {
                path: '/wildLife',
                element:<WildLife></WildLife>
            },
            {
                path: '/learn',
                element:<Learn></Learn>
            },
        ]
    }
])
export default router;