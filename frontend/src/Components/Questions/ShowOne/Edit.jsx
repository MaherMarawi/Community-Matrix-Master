import React from 'react'
import { Button } from 'semantic-ui-react';
function Edit({ setEdit }) {
    const onClick = () => {
        setEdit(true)
    }
    return (
        <div>
            <Button className="btn8" onClick={onClick}> Edit</Button>
        </div>
    )
}

export default Edit
