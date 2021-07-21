import React from 'react'

function ListItem({name, number}) {
    return (
        <li>
            {name}: {number}
        </li>
    )
}

export default ListItem
