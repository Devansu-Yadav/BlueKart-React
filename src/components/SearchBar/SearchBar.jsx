import "./searchbar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ className }) => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault();
        if(searchText.trim().length > 0) {
            navigate({
                pathname: "/productList",
                search: `query=${searchText.trim()}`
            });
            setSearchText("");
        }
    };

    return (
        <form className={`searchbar ${className.position ? className.position: ""} flex-row-container`} onSubmit={ searchHandler }>
            <input className="input-search input-primary" type="search" placeholder="Search for products, brands and more" 
            onChange={(event) => setSearchText(event.target.value)} />

            <button className="search-btn" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon space-M"/>
            </button>
        </form>
    );
}

export { SearchBar };