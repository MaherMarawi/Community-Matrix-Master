import React from 'react'
import axios from 'axios'

const DeleteQ = (props) => {
     const removeData = () => {
        const matchId = props.id
        axios.delete(`http://localhost:5000/api/RemoveQuestion/${matchId}`).then(res => {
            window.location.href = 'http://localhost:3000'
        })
    }
    return (
        <>
            <h1 id='title'>Title</h1>
            <table >
                <tbody>
                    <button onClick={() => removeData()}>Delete</button>
                </tbody>
            </table>
        </>
    )
}
export default DeleteQ

