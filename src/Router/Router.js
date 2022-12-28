import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import Courses from "../component/Courses";
import Main from "../layout/Main";
import Ragister from "../Ragister";
import Error from "../component/Error";
import Login from "../Login";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Ragister></Ragister>
            },
            {
                path:'/Course',
                element:<Courses></Courses>

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
                path:'/Course/:id',
               
                loader:({params})=>fetch(`http://localhost:5000/Course/${params.id}`)
            }
        ]
        
    }

])