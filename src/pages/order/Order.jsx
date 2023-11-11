import {useLoaderData} from "react-router-dom"

import {calcMinutesLeft, formatCurrency, formatDate} from "../../utils/helpers.js"
import {getOrder} from "../../services/apiRestaurant.js"
import OrderItem from "./OrderItem.jsx"

function Order() {
    // Test ID: IIDSAT
    const order = useLoaderData()

    // Everyone can search for all orders, so for privacy reasons we're gonna exclude names or address, these are only for the restaurant staff
    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart
    } = order
    const deliveryIn = calcMinutesLeft(estimatedDelivery)

    return (
        <div className="px-4 py-6 space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-10">
                <h2 className="text-xl font-semibold">Order #{id} Status</h2>

                <div className="space-x-2">
                    {priority && <span
                        className="py-1 px-3 rounded-full bg-red-500 text-red-50 font-semibold uppercase tracking-wide text-sm">
                            Priority
                    </span>
                    }
                    <span
                        className="py-1 px-3 rounded-full bg-green-500 text-green-50 font-semibold uppercase tracking-wide text-sm">
                        {status} order
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-10 bg-stone-200 py-5 px-6">
                <p className="font-medium">
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                        : "Order should have arrived"}
                </p>
                <p className="text-xs md:text-sm text-stone-500">
                    (Estimated delivery: {formatDate(estimatedDelivery)})
                </p>
            </div>

            <ul className="divide-y">
                {cart.map(item => <OrderItem key={item.pizzaId} item={item}/>)}
            </ul>

            <div className="bg-stone-200 py-5 px-6 space-y-2 text-sm text-stone-600 font-medium">
                <p>Price pizza: {formatCurrency(orderPrice)}</p>
                {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
                <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
            </div>
        </div>
    )
}

export function loader({params}) {
    return getOrder(params?.orderId)
}

export default Order