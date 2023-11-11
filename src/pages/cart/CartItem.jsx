import {formatCurrency} from "../../utils/helpers.js"
import Button from "../../components/Button.jsx"

function CartItem({item}) {
    const {pizzaId, name, quantity, totalPrice} = item

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center gap-x-4">
                <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
                <Button size="extraSmall">-</Button>
                <Button size="extraSmall">+</Button>
            </div>
        </li>
    )
}

export default CartItem