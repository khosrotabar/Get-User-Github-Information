import React, {useState} from 'react'
const axios = require('axios')

function Form(props) {
    const [username, setUsername] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault()
        axios.get(`https://api.github.com/${username}`).then(resp => {
            props.onSubmit(resp.data)
            setUsername('')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="GitHub username"
            required
          />
          <button type="submit">Show informations</button>
        </form>
    )
}

export default Form
