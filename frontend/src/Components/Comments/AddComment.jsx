import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react';
const AddComment = ({ id, comments, setComments, loading, setLoading, user }) => {
    
    const { register, handleSubmit, errors } = useForm();

    const onClick = (data, e) => {
        setLoading(true)
        console.log(user)
        data.user_id = user?.id
        data.user_name = user?.username
        console.log(data)
        axios.post(`http://localhost:5000/api/AddComment/${id}`, data)
            .then(result => {console.log(result.data)
                const newComments = [...comments, result.data]
                setComments(newComments)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err) })
    }
    return (
        // <div>
        //     <input type='text' name='comment' className="input8" ref={register({ required: true })} placeholder='Type your question' />
        //     {errors.title && errors.title.type === "required" && <span>This is required</span>}<br />
        //     <textarea type='text' name='userCode' className="input8" ref={register} placeholder='Some Code'></textarea>
        //     <button className="btn8" disabled={loading} onClick={handleSubmit(onClick)} >{loading ? 'Loading' : 'Add'}</button>
        // </div>
        <Form className="form8" >
            <Form.Field>
            <h3>Add Comment</h3>
                <input type='text' name='comment' className="input8" ref={register({ required: true })} placeholder='Comment' />
                {errors.comment && errors.comment.type === "required" && <span>This is required</span>}
            </Form.Field>
            <Form.Field>
                <textarea type='text' name='userCode' className="input8" ref={register} placeholder='Some Code'></textarea>
            </Form.Field>
            <Button className="btn8" disabled={loading} onClick={handleSubmit(onClick)} >{loading ? 'Loading' : 'Add'}</Button>
        </Form>

    )
}
export default AddComment