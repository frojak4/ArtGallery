import { getPictureData } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'

type DataType = {
    error: string | null
    data: {
    objectID: number,
    primaryImage: string,
    title: string,
    } | null
}

const GalleryItem = async ({id}: {id: number}) => {

    const {data, error} = await getPictureData(id) as DataType;
  return (
    <div className="m-4 h-32 w-32 overflow-hidden text-white">
        {data && 
        <>
        <Image className='object-cover' alt={data.title} src={data.primaryImage} width={400} height={400}/>
        <h3>{data.title}</h3>
         </>
        }

        {error && <h3>error</h3>}

    </div>
  )
}

export default GalleryItem