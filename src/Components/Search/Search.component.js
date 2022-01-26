import React from 'react'

const Search=(props)=>{
    return(
        <input
            name='search'
            className='search-box'
            type='text'
            placeholder='search monsters'
            onChange={props.handleSearch}
        />
    )
}
export default Search