import React from 'react'
import { Button, Form} from 'semantic-ui-react';
import axios from 'axios'

function EditC({ comment, comments, setComments, loading, setLoading, setEditComment }) {
    const [ oldComment, setOldComment ] = React.useState(comment.comment)
    const [ oldUserCode, setOldUserCode ] = React.useState(comment.userCode)
    const [ valid, setValid ] = React.useState('')
    const onClose = () => setEditComment('')
    const onComment = (e) => setOldComment(e.target.value)
    const onUserCode = (e) => setOldUserCode(e.target.value)
    const onClick = () => {
        if (!oldComment == '') {
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
        } else {
            setValid('This field must be filled')
        }
    }
    return (
        <div>
            {/*<React.Fragment>
                <input type='text' name='oldComment' onChange={onComment} value={oldComment} className="input8" />
                <p>{valid && valid}</p>
                <br />
                <textarea type='text' name='oldUserCode' onChange={onUserCode} value={oldUserCode} className="input8"></textarea>
                <button className="btn8" disabled={loading} onClick={() => onClick()} >{loading ? 'Loading' : 'Edit'}</button>
                <button onClick={() => onClose()} >Close</button>
            </React.Fragment>*/}

            <Form className="form8" style={{margin:"30px auto"}}>
                    <Form.Field>
                        <label>Comment</label>
                        <input className="input8" type='text' name='oldComment' onChange={onComment} value={oldComment} />
                        <p>{valid && valid}</p>
                        </Form.Field>
                    <Form.Field>
                        <label>Some Code</label>
                        <textarea className="input8" rows="3" type='text' name='oldUserCode' onChange={onUserCode} value={oldUserCode}/>
                    </Form.Field>
                    <Button className="btn8" disabled={loading} onClick={() => onClick()} >{loading ? 'Loading' : 'Edit'}</Button>
                    <Button className="btn8" onClick={() => onClose()} >Close</Button>
                </Form>
        </div>
    )
}
export default EditC
