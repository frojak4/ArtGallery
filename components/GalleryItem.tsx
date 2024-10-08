import { getPictureData } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'

type DataType = {
    error: string | null
    data: {
    objectID: number,
    primaryImageSmall: string,
    title: string,
    } | null
}

const GalleryItem = async ({id}: {id: number}) => {

    const {data, error} = await getPictureData(id) as DataType;
  return (
    <div className="h-48 flex">
        {data && <Image alt={data.title} src={data?.primaryImageSmall} width={200} height={200}/>}
    </div>
  )
}

export default GalleryItem