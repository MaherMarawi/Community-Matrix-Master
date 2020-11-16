import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import axios from 'axios'

const AddComment = ({ id, comments, setComments, loading, setLoading }) => {
    const { register, handleSubmit, errors } = useForm();

    const onClick = (data) => {
        setLoading(true)
        console.log(data)
        axios.post(`http://localhost:5000/api/AddComment/${id}`, data)
            .then(result => {
                console.log(result.data)
                const newComments = [...comments, result.data]
                setComments(newComments)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err) })
    }
    return (
        <div>
            <input type='text' name='comment' className="input8" ref={register({ required: true })} placeholder='Type your question' />
            {errors.title && errors.title.type === "required" && <span>This is required</span>}<br />
            <textarea type='text' name='userCode' className="input8" ref={register} placeholder='Some Code'></textarea>
            <button className="btn8" disabled={loading} onClick={handleSubmit(onClick)} >{loading ? 'Loading' : 'Add'}</button>
        </div>

    )
}
export default AddComment