import React from 'react'
import axios from 'axios'
import { Button} from 'semantic-ui-react';
const DeleteQ = (props) => {
     const removeData = () => {
        const matchId = props.props.match.params.id
        axios.delete(`http://localhost:5000/api/RemoveQuestion/${matchId}`)
        .then(res => {console.log(res.data)
            // window.location.href = 'http://localhost:3000/community'
            props.props.history.goBack()
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <h1 id='title'>Title</h1>
            <table >
                <tbody>
                    <Button className="btn-danger8" onClick={() => removeData()}>Delete</Button>
                </tbody>
            </table>
        </>
    )
}
export default DeleteQ

