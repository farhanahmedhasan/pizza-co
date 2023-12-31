import {Link} from "react-router-dom"

function CartOverview() {
    return (
        <div
            className="col-span-12 flex items-center justify-between px-4 py-4 bg-stone-800 text-stone-200 text-sm uppercase sm:px-6 md:text-base">
            <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
                <span>23 pizzas</span>
                <span>$23.45</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview