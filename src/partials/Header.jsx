import {Link} from "react-router-dom"
import SearchOrder from "../pages/order/SearchOrder.jsx"

export default function Header() {
    return (
        <header>
            <Link to="/">React Fast Pizza Co.</Link>
            <SearchOrder/>
            <p>Hasan</p>
        </header>
    )
}