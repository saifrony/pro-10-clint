import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import Courses from "../component/Courses";
import Main from "../layout/Main";
import Login from "../Login";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Login></Login>
            },
            {
                path:'/Course',
                element:<Courses></Courses>

            },
            {
                path:'/Blog',
                element:<Blog></Blog>
                        
            }
        ]
        
    }

])