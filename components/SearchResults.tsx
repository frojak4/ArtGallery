import { getIDsfromSearch } from '@/utils/utils'
import React, { Suspense } from 'react'
import GalleryItem from './GalleryItem'

type DataType = number[] | null

const SearchResults = async ({searchParams}: {searchParams : {query?: string}}) => {

    const query = searchParams.query || null
    
    let data: DataType = null;

    if (query){
        data = await getIDsfromSearch(query)
        console.log(query)
    }

    

  return (
    
    <div className="w-5/6 flex flex-wrap items-center justify-center bg-gray-800 mt-2 max-h-screen overflow-auto">
        {data && data.map((id, i) => {
        return  <Suspense key={i} fallback={<p>Loading</p>}> 
        <GalleryItem key={i} id={id}/> 
        </Suspense>
        })}
    </div>
    
  )
}


export default SearchResults