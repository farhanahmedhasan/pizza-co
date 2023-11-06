import {createBrowserRouter, RouterProvider} from "react-router-dom"

import CreateOrder from "./pages/order/CreateOrder.jsx"
import Order from "./pages/order/Order.jsx"
import Home from "./pages/home/Home.jsx"
import Menu from "./pages/menu/Menu.jsx"
import Cart from "./pages/cart/Cart.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/menu",
        element: <Menu/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/order/:orderId",
        element: <Order/>
    },
    {
        path: "/order/create",
        element: <CreateOrder/>
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
