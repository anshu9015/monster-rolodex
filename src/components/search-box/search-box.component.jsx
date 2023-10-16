import React from "react";

export const SearchBox = ({placeholder, clickMethod}) => (
    <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={clickMethod}
    />
);