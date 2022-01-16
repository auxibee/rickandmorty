import { useMemo } from "react";

const range = (start, end) => {
    let length = end - start + 1

    return Array.from({length}, (_, idx) => idx + start)
}

const usePagination = ({totalCount, pageSize, currentPage}) => {
    const paginationRange = useMemo(()=> {
        
        const totalPageCount = Math.ceil(totalCount / pageSize)

        if (totalCount <= pageSize ) return []

        const pages = range(1, totalPageCount)
        const firstPage = pages[0]
        const lastPage = pages[pages.length - 1]
        return [firstPage,currentPage,lastPage]
       

    },[totalCount, pageSize, currentPage])

    return paginationRange
}
 
export default usePagination;