import {useNavigate, useRouteError} from "react-router-dom"

function Error() {
    const navigate = useNavigate()
    const error = useRouteError()

    const message = error.status ? error.status + " - " + error.statusText : error.message

    console.log(error)

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{message}</p>
            <button type="button" onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    )
}

export default Error