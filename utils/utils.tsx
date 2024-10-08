import 'server-only'

export const getIDsfromSearch = async (query: string) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`, {cache: 'no-store'})

    if (!response.ok){
        throw new Error('Could not fetch data')
    }

    const data = await response.json()
    data.objectIDs.length = 10;
    
    return data.objectIDs;
}

export const getPictureData = async (id: number) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, {cache: 'no-store'})

    if (!response.ok){
        return {data: null, error: 'Could not fetch data'}
    }


    const data = await response.json();

    return {data: data, error: null}
}