import {Outlet} from "react-router-dom"

import CartOverview from "../pages/cart/CartOverview.jsx"
import Header from "../partials/Header.jsx"

export default function AppLayout() {
    return (
        <>
            <Header/>

            <main>
                <Outlet/>
            </main>

            <CartOverview/>
        </>
    )
}