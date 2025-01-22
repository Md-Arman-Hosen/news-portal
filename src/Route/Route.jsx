import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";

const route = createBrowserRouter ([
    {
        path: '/',
        element:<Root></Root>,
        children: [
            {
              path:'/',
              element: <Home></Home>
            }
        ]
    }
])
export default route;