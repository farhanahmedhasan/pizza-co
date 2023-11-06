import {createBrowserRouter, RouterProvider} from "react-router-dom"

import CreateOrder from "./features/order/CreateOrder.jsx"
import Order from "./features/order/Order.jsx"
import Home from "./features/home/Home.jsx"
import Menu from "./features/menu/Menu.jsx"
import Cart from "./features/cart/Cart.jsx"

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
        path: "/order/:orderId", //After placing a order show order details
        element: <Order/>
    },
    {
        path: "/order/create", //Will show order form and will place order
        element: <CreateOrder/>
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
