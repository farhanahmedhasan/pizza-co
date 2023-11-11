/* eslint-disable react/button-has-type */
import {Link, useNavigate} from "react-router-dom"

export default function LinkButton({children, href = "/", type = "button", as = "button"}) {
    const navigate = useNavigate()
    const baseClass = "text-sm text-blue-500 hover:text-blue-600 hover:underline"

    if (href === "-1") {
        return (
            <button type={type} className={baseClass} onClick={() => navigate(-1)}>{children}</button>
        )
    }

    return (
        <Link to={href} as={as} className={baseClass}>
            {children}
        </Link>
    )
}