import {useState} from "react"
import {useNavigate} from "react-router-dom"

export default function SearchOrder() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return

        navigate(`/order/${query}`)
        setQuery("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-input"
                name="order"
                value={query}
                onChange={handleChange}
                placeholder="Provide order id"/>
        </form>
    )
}