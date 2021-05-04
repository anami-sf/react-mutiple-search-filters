import listData from './DataList'
import {useState, useEffect} from 'react'

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
    
    const filterData = (color, name) => {
        const parsedName = name.toLowerCase().trim()
        const parsedColor = color.toLowerCase().trim()
        
        if (!parsedName && !parsedColor) {
            setData(listData)
        } else {
            const filteredData = listData.filter(({name, color}) => {
                return name.toLowerCase().includes(parsedName) && color.toLowerCase().includes(parsedColor)
            })
            setData(filteredData)
        }
    }

    return (
        <>
            <div>
                Search by Name: <input 
                    type="text"
                    placeholder="Type your search here"
                    value={searchName}
                    onChange={e => handleSearch(e.target.value, 'name')}
                />
            </div>
            <div>
                Search by Color: <input 
                    type="text"
                    placeholder="Type your search here"
                    value={searchColor}
                    onChange={e => handleSearch(e.target.value, 'color')}
                />
            </div>
            <div>
                {data.map(({id, name, year, color, pantone_value}) => {
                    return (
                        <div 
                            key={id}
                            style={{backgroundColor: color, margin: "5px"}}
                        >
                            <b>name:</b> {name} <br/>
                            <b>color:</b> {color} <br/>
                            <b>year:</b> {year} <br/>
                            <b>pantone value:</b> {pantone_value} <br/>
                        </div> 
                    )
                })}
            </div>
        </>
    )
}

export default MultipleSearchFilters
