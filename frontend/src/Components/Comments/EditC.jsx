import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function EditC({comment, comments, setComments, loading, setLoading, index }) {
    const { register, handleSubmit, errors } = useForm();

    const onClick = (data) => {
        setLoading(true)
        console.log(data)
        axios.put(`http://localhost:5000/api/EditComment/${comment._id}`, data)
            .then(result => {
                console.log(result.data)
                const newComments = comments.splice(index, 1, result.data)
                setComments(newComments)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err) })
    }
    return (
        <div>
            <input type='text' name='comment' value={comment.comment} className="input8" ref={register({ required: true })} placeholder='Type your question' />
            {errors.title && errors.title.type === "required" && <span>This is required</span>}<br />
            <textarea type='text' name='userCode' value={comment.userCode} className="input8" ref={register} placeholder='Some Code'></textarea>
            <button className="btn8" disabled={loading} onClick={handleSubmit(onClick)} >{loading ? 'Loading' : 'Add'}</button>
        </div>

    )
}
export default EditC
