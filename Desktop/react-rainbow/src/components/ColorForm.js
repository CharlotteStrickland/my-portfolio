import React from 'react'

export function ColorForm(props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
    }

    return (
        <div>
            <form>
                <input type="text"
                onChange={(e) => setInput(e.target.value)} />
            </form>
        </div>
    )
}