import DATALIST from './DataList'
import {useState, useEffect} from 'react'

const Filter = () => {
    const [data, setData] = useState(DATALIST)
    const [searchInputString, setSearchInputString] = useState('')

    useEffect(() => filterData(searchInputString), [searchInputString])

    const parseInput = (value) => value.toLowerCase().trim()

    const handleSearchInput = value => setSearchInputString(parseInput(value))

    const filterData = (searchInput) => {
        const filteredData = DATALIST.filter(({name}) => name.includes(searchInput))

        setData(filteredData) 
    }

    return (
        <>
            <input 
                type="text"
                placeholder="Type your serach here"
                value={searchInputString}
                onChange={e => handleSearchInput(e.target.value)}
            />
            <div>
            {data.map(({color, id, name, year}) => (
                <div key={id} style={{backgroundColor: color}}>
                    name: {name}<br/>
                    color: {color}<br/>
                    year: {year}<br/>
                </div>
            ))}
            </div>
        </>
    )
}

export default Filter
