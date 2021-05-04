import listData from './DataList'
import { useEffect, useState } from 'react'

const MultipleSearchFilters = () => {
    const [data, setData] = useState(listData)
    const [searchColor, setSearchColor] = useState('')
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        filterData(searchColor, searchName)
    }, [searchColor, searchName])
    
    const handleSearch = (value, filter) => {

        filter === 'name' && setSearchName(value)
        filter === 'color' && setSearchColor(value)
    }

    const parseString = str => str.toLowerCase().trim()

    const filterData = (colorInput, nameInput) => {
        
        (!colorInput && !nameInput) && setData(listData)
        
        const filteredData = listData.filter(({name, color}) => (
            parseString(name).includes(parseString(nameInput)) && parseString(color).includes(parseString(colorInput))
        ))
        
        setData(filteredData)
    }

    return (
        <>
            <div>
                Search by Name: <input 
                    onChange={e => handleSearch(e.target.value, 'name')}
                    placeholder="Type your search here"
                    type="text"
                    value={searchName}
                />
            </div>
            <div>
                Search by Color: <input 
                    onChange={e => handleSearch(e.target.value, 'color')}
                    placeholder="Type your search here"
                    type="text"
                    value={searchColor}
                />
            </div>
            <div>
                {data.map((
                    {
                        color, 
                        id, 
                        name, 
                        pantone_value,
                        year, 
                    }) => (
                    <div 
                        key={id}
                        style={{backgroundColor: color, margin: "5px"}}
                    >
                        <b>color:</b> {color} <br/>
                        <b>name:</b> {name} <br/>
                        <b>pantone value:</b> {pantone_value} <br/>
                        <b>year:</b> {year} <br/>
                    </div> 
                ))}
            </div>
        </>
    )
}

export default MultipleSearchFilters
