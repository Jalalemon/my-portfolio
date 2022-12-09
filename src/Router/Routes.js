import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills";
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
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
])
export default router;