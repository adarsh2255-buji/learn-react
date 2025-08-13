import React, { useState } from 'react'

const SearchFilter = () => {
      const items = ["Apple", "Banana", "Cherry", "Grapes", "Orange", "Mango"];
      const [search, setSearch] = useState("");

      const filteredItems = items.filter((item) => (
        item.toLowerCase().includes(search.toLowerCase())
      ))
  return (
    <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <ul>
            {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ) )
             ) : (<p>Item not found</p>)}
        </ul>
    </div>
  )
}

export default SearchFilter