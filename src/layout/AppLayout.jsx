import {Outlet, useNavigation} from "react-router-dom"
import Spinner from "../components/Spinner.jsx"
import Header from "../partials/Header.jsx"

export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"

    return (
        <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-12">
            <Header/>

            <aside className="bg-red-500 h-full col-span-2">
                <h1>yo</h1>
            </aside>

            {isLoading && <Spinner/>}

            <div className="overflow-y-scroll col-span-10">
                <main className="max-w-3xl mx-auto h-[1000px]">
                    <Outlet/>
                </main>
            </div>

            {/*<CartOverview/>*/}
        </div>
    )
}