import React from 'react'

function OpenEdit({ index, setEditComment }) {
    
        
    
    const onClick = () => {
        setEditComment(index)
    }
    return (
        <button onClick={() => onClick()} >Edit</button>


    )
}
export default OpenEdit
