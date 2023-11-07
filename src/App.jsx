import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Menu, {loader as menuLoader} from "./pages/menu/Menu.jsx"
import CreateOrder from "./pages/order/CreateOrder.jsx"
import AppLayout from "./layout/AppLayout.jsx"
import Order from "./pages/order/Order.jsx"
import Cart from "./pages/cart/Cart.jsx"
import Error from "./pages/Error.jsx"
import Home from "./pages/Home.jsx"

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>,
                loader: menuLoader,
                errorElement: <Error/>
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
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
