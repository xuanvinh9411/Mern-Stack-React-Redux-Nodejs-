import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
const AuthLayout = ()=>{
   return  <Outlet />
}

export default createBrowserRouter([
    {
        element : <AuthLayout />,
        children : [
        {
            element  :<Login />,
            path  : '/login',
        },{
            element : <Home/>,
            path :'./'
        }
    ]
    }
])