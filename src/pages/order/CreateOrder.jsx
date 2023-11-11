import {Form, redirect, useActionData, useNavigation} from "react-router-dom"

import {createOrder} from "../../services/apiRestaurant.js"
import {isValidPhone} from "../../utils/helpers.js"
import Button from "../../components/Button.jsx"

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32
    },
    {
        pizzaId: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13
    },
    {
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15
    }
]

function CreateOrder() {
    const navigation = useNavigation()
    const errors = useActionData()

    const isSubmitting = navigation.state === "submitting"

    // const [withPriority, setWithPriority] = useState(false);
    const cart = fakeCart

    return (
        <div>
            <h2>Ready to order? Let&apos;s go!</h2>


            <Form method="post">
                <div>
                    <label>First Name</label>
                    <input type="text" name="customer" required/>
                </div>

                <div>
                    <label>Phone number</label>
                    <div>
                        <input type="tel" name="phone" required/>
                    </div>
                    {errors?.phone && <span>{errors?.phone}</span>}
                </div>

                <div>
                    <label>Address</label>
                    <div>
                        <input
                            type="text"
                            className="w-full rounded-full px-4 py-2 text-sm border border-stone-200 transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
                            name="address"
                            required/>
                    </div>
                </div>

                <div>
                    <input
                        type="checkbox"
                        className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority">Want to yo give your order priority?</label>
                </div>

                <div>
                    <Button
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Placing order..." : "Order now"}
                    </Button>
                </div>

                <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
            </Form>
        </div>
    )
}

export async function action({request}) {
    const formData = await request.formData()
    const order = Object.fromEntries(formData)

    const formattedOrder = {
        ...order,
        cart: JSON.parse(order.cart),
        priority: order.priority === "on"
    }

    const errors = {}
    if (!isValidPhone(order.phone)) errors.phone = "Please provide your correct phone number"

    if (Object.keys(errors).length) return errors

    const newOrder = await createOrder(formattedOrder)
    return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder