import React,{ useState } from "react"
import axios from "axios"
import './index.css'
import logo from '../../static/logo.png'

const Search = () => {
    const [input,setInput] = useState()
    const [ data, setData ] = useState()
    const [ hidden, setHidden] = useState(true)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(input)
        axios.post("http://127.0.0.1:5000/random", { url: {input}})
        .then ( data => data.json)
        .then ( data => setData(data))
        setHidden(!hidden)
    };
    
    return (
        <div className="search">
            <div id="img"><img src={logo} alt="logo" /></div>
            <form action="" onSubmit={handleFormSubmit}>   
                <label for="link"></label>
                <input type="text" name="link-search" id="link" placeholder="enter link" value={input} />
                <input type="submit"  name="search" id = 'submit' placeholder="Reduce URL" />
            </form>
            <div hidden={hidden}>
                <a href={data}>URL Reduced</a>
            </div>
        </div>
    )
};

export default Search
