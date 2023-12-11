import React, { useEffect, useState } from 'react';

function Search(props) {
    const [searchText, setSearchText] = useState("");

    const { onSearch } = props; // Destructure onSearch here

    const handleChange = (event) => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        onSearch(searchText); // Use onSearch directly without including it in the dependency array
        // eslint-disable-next-line
    }, [searchText]);

    return (
        <div style={{ textAlign: "center" }}>
            <input
                type="text"
                placeholder="Search Country"
                value={searchText}
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;
