import React from 'react'

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className = "pa2 ">
            <input 
                className = 'pa3 ba b--green bg-lightest-blue'
                type = 'search'
                placeholder = 'search robots'
                // every time the on change is triggered, call the searchChange function
                onChange={searchChange}
            />
        </div>
        
    )
}

export default SearchBox