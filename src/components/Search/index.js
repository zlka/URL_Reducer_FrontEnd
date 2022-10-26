import React from "react"
import './index.css'
import logo from '../../static/logo.png'

const Search = () => {
    return (
        <div className="search">
            <div id="img"><img src={logo} alt="logo" /></div>
            <form action="heroku">
            
                <label for="link"></label>
                <input type="text" name="link-search" id="link" placeholder="enter link" />
                <input type="submit" name="search" id = 'submit' value="Reduce URL" />
            </form>
        </div>
    )
};

export default Search
