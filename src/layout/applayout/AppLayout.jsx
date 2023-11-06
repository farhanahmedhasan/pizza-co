import Header from "../../partials/header/Header.jsx"
import CartOverview from "../../pages/cart/CartOverview.jsx"
import {Outlet} from "react-router-dom"

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