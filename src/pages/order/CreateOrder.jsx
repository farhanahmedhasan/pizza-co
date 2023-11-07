import {Form, redirect, useActionData, useNavigation} from "react-router-dom"

import {createOrder} from "../../services/apiRestaurant.js"
import {isValidPhone} from "../../utils/helpers.js"

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
                        <input type="text" name="address" required/>
                    </div>
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority">Want to yo give your order priority?</label>
                </div>

                <div>
                    <button type="submit"
                        disabled={isSubmitting}>{isSubmitting ? "Placing order..." : "Order now"}</button>
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