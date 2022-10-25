import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import Main from "../layout/Main";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/Blog',
                element:<Blog></Blog>
                        
            }
        ]
        
    }

])