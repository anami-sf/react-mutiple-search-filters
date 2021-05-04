import { useState, useEffect } from 'react'
import dataList from './DataList.js';


function SingleSearchFilter() {
  const [data, setData] = useState(dataList)
  const [searchInput, setSearchInput] = useState('')

  useEffect( () => {
    filterData(searchInput)
  }, [searchInput])


  const handleChange = value => {
    setSearchInput(value)
  }

  const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim()

    if (!lowerCaseValue) {
      setData(dataList)
    } else {
      const filteredData = dataList.filter(item => {
        return Object.values(item).some( attribute => {
          return attribute.toString().toLowerCase().includes(lowerCaseValue)
        })
      })
      setData(filteredData)
    }
  }

  return (
    <div className="App">
      search: <input 
        type='text'
        placeholder="Type to search"
        value={searchInput}
        onChange = {e => handleChange(e.target.value)}
      />
      <div>
        {data.map(({id, name, year, color, pantone_value}) => {
          return <div key={id} style={{backgroundColor: "white", border: `5px solid ${color}`, margin: "5px"}}>
            name: {name}<br/>
            year: {year}<br/>
            color: {color}<br/>
            pantone value:{pantone_value}<br/>
          </div>
        })}
      </div>

    </div>
  );
}

export default SingleSearchFilter;
