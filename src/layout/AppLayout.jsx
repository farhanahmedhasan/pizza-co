import {Outlet, useNavigation} from "react-router-dom"

import CartOverview from "../pages/cart/CartOverview.jsx"
import Spinner from "../components/Spinner.jsx"
import Header from "../partials/Header.jsx"

export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"

    return (
        <>
            <Header/>

            {isLoading && <Spinner/>}

            <main>
                <Outlet/>
            </main>

            <CartOverview/>
        </>
    )
}