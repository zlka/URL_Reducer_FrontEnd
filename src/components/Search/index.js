import React, { useState } from "react"
import axios from "axios"
import './index.css'
import logo from '../../static/logo.png'

const Search = () => {
    const [input, setInput] = useState()
    const [data, setData] = useState()
    const [hidden, setHidden] = useState(true)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log({ input }.input)
        const sendInput = { input }.input
        axios.post("http://127.0.0.1:5000/random", { url: sendInput })
        .then(response => {
             setData(response.data);
            })
        console.log("data", data)
        setHidden(!hidden)
    };

    const handleInputChange = (e) => {
        setInput(e.target.value)
    };

    return (
        <div className="search">
            <div id="img"><img src={logo} alt="logo" /></div>
            <form action="" onSubmit={handleFormSubmit}>
                <label for="link"></label>
                <input type="text" name="link-search" id="link" placeholder="enter link" value={input} onChange={handleInputChange} />
                <input type="submit" name="search" id='submit' placeholder="Reduce URL" />
            </form>
            <div hidden={hidden}>
                <p>Reduced url:</p>
                <a href={data}>{data}</a>
            </div>
        </div>
    )
};

export default Search
