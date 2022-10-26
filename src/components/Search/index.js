import React from "react"
import './index.css'

const Search = () => {
    return (
        <div className="search">
            <form>
                <label for="link">URL:</label>
                <input type="text" name="link-search" id="link" placeholder="https..." />
                <input type="submit" name="search" id = 'submit' value="Shorten URL" />
            </form>
        </div>
    )
};

export default Search
