import { fetchAxios } from 'pages/api';
import { useState, useEffect} from 'react';

const useFetch = (url) => {

    const [wiki, setWiki]  = useState({info: null, characters: null, count: null})

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchAxios(url)
            const { data } = response;
            
            const characters = await Promise.all(
                data.characters ? 
                data.characters.map(async (resident) => {
                    const response = await fetchAxios(resident);
                    const { data } = response;
                    return data;
                  }) :
                  data.residents ?
                  data.residents.map(async (resident) => {
                    const response = await fetchAxios(resident);
                    const { data } = response;
                    return data;
                  }) :
                  data.results.map(async (resident) => {
                    const response = await fetchAxios(resident);
                    const { data } = response;
                    return data;
                  })
              );

              setWiki({info: data, characters: characters, count : data.info ? data.info.count : null})

              

           
        }

        fetchData()
    },[url])
    return {wiki, setWiki}
}
 
export default useFetch;