import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import News from "../Pages/News/News";
import Login from "../Pages/LogIn/Login";
import Register from "../Register/Register";

const route = createBrowserRouter ([
    {
        path: '/',
        element:<Root></Root>,
        children: [
            {
              path:'/',
              element: <Home></Home>,
              loader: ()=>fetch('/news.json')
            },
            {
              path:'/news/:id',
              element: <News></News>,
              loader: ()=>fetch('/news.json')
            },
            {
              path:'login',
              element: <Login></Login>  
            },
            {
              path:'signup',
              element: <Register></Register> 
            },
        ]
    }
])
export default route;