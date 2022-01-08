
import SearchInput from './input';
import SelectInput from './selectInput';

export default {
    title : 'Elements/Inputs'
}

export const searchInput = () => <SearchInput />


const options = ["Choose....","episode-1","espisode-2", "episode-3"]
export const SelectionInput = () => <SelectInput name="episodes" options={options}/>