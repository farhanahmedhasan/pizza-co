import {Link} from "react-router-dom"
import SearchOrder from "../pages/order/SearchOrder.jsx"

export default function Header() {
    return (
        <header
            className="col-span-12 flex justify-between items-center px-4 py-3 bg-yellow-500 uppercase border-b border-stone-200 sm:px-6">
            <Link to="/" className="tracking-widest">React Fast Pizza Co.</Link>
            <SearchOrder/>
            <p className="text-sm font-semibold hidden sm:block">Hasan</p>
        </header>
    )
}