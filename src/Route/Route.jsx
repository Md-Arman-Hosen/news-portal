import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import News from "../Pages/News/News";

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
              element: <News></News>
            },
        ]
    }
])
export default route;