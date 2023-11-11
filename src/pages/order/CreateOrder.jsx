import {Form, useActionData, useNavigation} from "react-router-dom"
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
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">Ready to order? Let&apos;s go!</h2>


            <Form method="post">
                <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center">
                    <label className="md:basis-40">First Name</label>
                    <input
                        type="text"
                        className="flex-1 rounded-full px-4 py-2 text-sm border border-stone-200 transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
                        name="customer"
                        required/>
                </div>

                <div
                    className={`mb-5 flex flex-col gap-2 md:flex-row ${errors?.phone ? "md:items-start" : "md:items-center"}`}>
                    <label className={`md:basis-40 ${errors?.phone ? "md:mt-3 text-red-700" : ""}`}>Phone
                        number
                    </label>
                    <div className="grow">
                        <input
                            type="tel"
                            className="w-full rounded-full px-4 py-2 text-sm border border-stone-200 transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
                            name="phone"
                            required/>
                        {errors?.phone &&
                            <span
                                className="text-xs ml-4 mt-2 py-0.5 px-3 text-red-700 bg-red-100 rounded-md">{errors?.phone}</span>}
                    </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center">
                    <label className="md:basis-40">Address</label>
                    <div className="grow">
                        <input
                            type="text"
                            className="w-full rounded-full px-4 py-2 text-sm border border-stone-200 transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
                            name="address"
                            required/>
                    </div>
                </div>

                <div className="mb-10 flex items-center gap-5">
                    <input
                        type="checkbox"
                        className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
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

    return null

    // const newOrder = await createOrder(formattedOrder)
    // return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder