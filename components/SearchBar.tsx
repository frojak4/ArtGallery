'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation';



const SearchBar = () => {


    const router = useRouter();
    const [query, setQuery] = useState('')
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setQuery(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      router.push(`/?query=${query}`)
    }
  
    return (
    <form onSubmit={handleSubmit} className="mx-auto">
        <input 
        placeholder="Search for picture"
        type="text"
        className="text-center text-gray-700"
        value={query}
        onChange={handleQueryChange}
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar