import {Outlet, useNavigation} from "react-router-dom"

import CartOverview from "../pages/cart/CartOverview.jsx"
import Spinner from "../components/Spinner.jsx"
import Header from "../partials/Header.jsx"

export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Header/>

            {isLoading && <Spinner/>}

            <div className="overflow-y-scroll">
                <main className="max-w-3xl mx-auto">
                    <Outlet/>
                </main>
            </div>

            <CartOverview/>
        </div>
    )
}