import React from 'react'

export const Search = ({ setSearch, setPages }) => {
    return (
        <div className='mt-4'>
            <input onChange={(evt) => {
                setPages(1)
                setSearch(evt.target.value)}}
                className='form-control w-50 mx-auto' type="search" placeholder='Search...' />
        </div>
        )
    }
    