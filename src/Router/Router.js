import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import Courses from "../component/Courses";
import Main from "../layout/Main";
import Ragister from "../Ragister";
import Error from "../component/Error";
import Login from "../Login";
import Home from "../component/Home";
import PrivateRoad from "../road/PrivateRoad";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/Home',
                element:<Home></Home>
            },
            {
                path:'/Course',
                element:<PrivateRoad><Courses></Courses></PrivateRoad>

            },
            {
                path:'/Faq',
                element:<Blog></Blog>
                        
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/ragister',
                element:<Ragister></Ragister>
            },

            {
                path:'/Course/:id',
               
                loader:({params})=>fetch(`http://localhost:5000/Course/${params.id}`)
            }
        ]
        
    }

])