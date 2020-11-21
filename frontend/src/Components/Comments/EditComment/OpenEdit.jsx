import React from 'react'
import { Button } from 'semantic-ui-react';
function OpenEdit({ index, setEditComment }) {
    
        
    
    const onClick = () => {
        setEditComment(index)
    }
    return (
        <Button className="btn8" onClick={() => onClick()} >Edit</Button>
    )
}
export default OpenEdit
