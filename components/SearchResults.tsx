import { getIDsfromSearch } from '@/utils/utils'
import React from 'react'
import GalleryItem from './GalleryItem'

type DataType = number[] | null

const SearchResults = async ({searchParams}: {searchParams : {query?: string}}) => {

    const query = searchParams.query || null
    
    let data: DataType = null;

    if (query){
        data = await getIDsfromSearch(query)
    }

    console.log(data)

  return (
    
    <div className="w-5/6 flex flex-col items-center bg-gray-800 mt-2 max-h-screen">
        {data && data.map((id, i) => {
        return <GalleryItem key={i} id={id}/>
        })}
    </div>
    
  )
}


export default SearchResults