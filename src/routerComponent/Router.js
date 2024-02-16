import { createBrowserRouter, Link } from "react-router-dom";
import Login from "../component/Login";
import TokenProvider from "../parentComponent/TokenProvider";

export const router = createBrowserRouter([{
    path:"/",
    element:  <h1>hello</h1>
},
{
    path:"/login",
    element: <TokenProvider><Login></Login></TokenProvider>
}
])