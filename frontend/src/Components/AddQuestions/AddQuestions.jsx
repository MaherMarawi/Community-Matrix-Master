
import { useForm } from 'react-hook-form'
import axios from 'axios'
import React from 'react';
import img from '../../img/3.png';

export default function AddQuestions(props) {
        
    const { register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
            axios.post('http://localhost:5000/api/AddQuestion', data)
            .then(result => {props.history.push('/')
            })
            .catch(err => { console.log(err) })
    }
    return (
        <div style={{ backgroundColor: "#FDF0EC" }}>
            <h1 className="addquestion-title8">Add Question</h1>
            <div className="addquestion-container8">
                <img src={img} alt="photo" />
                <form className="form8" onSubmit={handleSubmit(onSubmit)}>                       
                    <input type='text' name='title' className="input8" ref={register({ required: true, maxLength: 25 })} placeholder='Type your question' />
                    {errors.title && errors.title.type === "required" && <span>This is required</span>}
                    {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span>}
                    <br />
                    <textarea type='text' name='description' className="input8" ref={register({ required: true })} placeholder='Add a description' ></textarea>
                    {errors.description && errors.description.type === "required" && <span>This is required</span>}
                    <br />
                    <textarea type='text' name='userCode' className="input8" ref={register} placeholder='Some Code'></textarea>
                    <button className="btn8" >Add</button>
                </form>
            </div>
        </div>
    )
}