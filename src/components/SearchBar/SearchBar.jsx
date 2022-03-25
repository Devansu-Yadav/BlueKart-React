import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ className }) => {
    return (
        <div className={`searchbar ${className.position ? className.position: ""} flex-row-container`}>
            <input className="input-search input-primary" type="text" placeholder="Search for products, brands and more"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon space-M"/>
        </div>
    );
}

export { SearchBar };