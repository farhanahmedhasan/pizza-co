/* eslint-disable react/button-has-type */
import {Link} from "react-router-dom"

export default function Button({
    type = "button",
    disabled = false,
    size = "small",
    btnType = "primary",
    href,
    children
}) {
    const base = "text-sm font-semibold inline-block tracking-wide rounded-full " +
        " transition-all duration-200 focus:outline-none focus:ring " +
        "focus:ring-offset-2 disabled:cursor-not-allowed"

    const styles = {
        size: {
            large: base + " py-3 px-4 md:px-6 md:py-4",
            small: base + " py-2 px-4 text-xs md:px-5 md:py-2.5",
            extraSmall: base + " h-5 w-5 text-xs md:px-4 md:py-2 md:h-fit md:w-fit"
        },
        btnType: {
            primary: " uppercase bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:ring-yellow-300",
            secondary: " bg-transparent text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:ring-stone-200 border-2 border-stone-300 !py-2.5 md:!py-3.5"
        }
    }

    if (href) {
        return <Link to={href} className={styles.size[size] + styles.btnType[btnType]}>{children}</Link>
    }

    return (
        <button
            type={type}
            className={styles.size[size] + styles.btnType[btnType]}
            disabled={disabled}
        >
            {children}
        </button>
    )
}