import React from 'react'

import axios from 'axios'

function EditC({ comment, comments, setComments, loading, setLoading, index, setEditComment }) {
    const [ oldComment, setOldComment ] = React.useState(comment.comment)
    const [ oldUserCode, setOldUserCode ] = React.useState(comment.userCode)
    const onClose = () => setEditComment('')
    const onComment = (e) => setOldComment(e.target.value)
    const onUserCode = (e) => setOldUserCode(e.target.value)
    const onClick = () => {
        setLoading(true)
        const newComment = {comment: oldComment, userCode: oldUserCode}
        console.log(comment._id)
        axios.put(`http://localhost:5000/api/EditComment/${comment._id}`, newComment)
            .then(result => {
                const newComments = comments.filter(value => value._id != comment._id)
                const lastComments = [...newComments, newComment]
                setComments(lastComments)
                setLoading(false)
                setEditComment('')
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
        setLoading(false)
    }
    return (
        <div>
            <React.Fragment>
                <input type='text' name='oldComment' onChange={onComment} value={oldComment} className="input8" />
                <br />
                <textarea type='text' name='oldUserCode' onChange={onUserCode} value={oldUserCode} className="input8"></textarea>
                <button className="btn8" disabled={loading} onClick={() => onClick()} >{loading ? 'Loading' : 'Edit'}</button>
                <button onClick={() => onClose()} >Close</button>
            </React.Fragment>
        </div>


    )
}
export default EditC
