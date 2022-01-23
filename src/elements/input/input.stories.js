
import SearchInput from './input';
import SelectInput from './selectInput';
import { useState } from 'react';

export default {
    title : 'Elements/Inputs'
}

export const searchInput = () => {
    const [inputValue, setInputValue] = useState('')
    return (
        <SearchInput value={inputValue} onInputChange={setInputValue}/>
    )
}

const options = ["Choose....","episode-1","espisode-2", "episode-3"]
export const SelectionInput = () => <SelectInput name="episodes" options={options}/>