import React from "react";
import './search-form.styles.css';

export const SearchForm = (props) => (
    <div className="SearchForm-container">
        <form onSubmit={props.handleClick}>
        <input
            type="text"
            className="searchInput"
            placeholder= "City"
            name="city"
            required
        />
        <button type="submit" className="form-btn">
            GET FORECAST
        </button>
        </form>
    </div>
)