import 'server-only'
import {cache} from 'react'

export const getIDsfromSearch = cache(async (query: string) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true?q=${query}`, {next: {revalidate: 10}})

    if (!response.ok){
        throw new Error('Could not fetch data')
    }

    const data = await response.json()
    if (data.objectIDs.length > 20){
        data.objectIDs.length = 20;
    }
    return data.objectIDs;
})

export const getPictureData = cache(async (id: number) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, {next: {revalidate: 10}})

    if (!response.ok){
        return {data: null, error: 'Could not fetch data'}
    }


    const data = await response.json();

    return {data: data, error: null}
})