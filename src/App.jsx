import {createBrowserRouter, RouterProvider} from "react-router-dom"

import CreateOrder, {action as createOrderAction} from "./pages/order/CreateOrder.jsx"
import Order, {loader as orderLoader} from "./pages/order/Order.jsx"
import Menu, {loader as menuLoader} from "./pages/menu/Menu.jsx"
import AppLayout from "./layout/AppLayout.jsx"
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
                element: <Order/>,
                loader: orderLoader,
                errorElement: <Error/>
            },
            {
                path: "/order/create",
                element: <CreateOrder/>,
                action: createOrderAction
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
