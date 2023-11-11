import {useRouteError} from "react-router-dom"
import LinkButton from "../components/LinkButton.jsx"

function Error() {
    const error = useRouteError()

    const message = error.status ? error.status + " - " + error.statusText : error.message

    console.log(error)

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{message}</p>
            <LinkButton href="-1">&larr; Go back</LinkButton>
        </div>
    )
}

export default Error