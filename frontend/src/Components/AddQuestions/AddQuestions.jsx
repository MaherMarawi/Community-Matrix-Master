// import React from 'react'
// import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, TextArea, Image } from 'semantic-ui-react';
import img from '../../img/3.png';

export default function AddQuestions(props) {
    // const AddQuestions = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/api/AddQuestion', data)
        .then(result => {
            console.log(result)
            props.history.push('/')
        })

        .catch(err => { console.log(err) })
    }

    //     return (
    //         <div>
    //              <Link to='/'>See All Questions</Link>
    //                 <form style={{margin:10 + '%'}} onSubmit={handleSubmit(onSubmit)}>
    //                     <input type= 'text' name='title' ref={register({ required: true, maxLength: 5 })}  placeholder='Type your question'/><br/>
    //                     {errors.title && errors.title.type === "required" && <span>This is required</span>}
    //                      {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span> }
    //                     <textarea type= 'text' name='description' ref={register} placeholder='Add a description'/><br/>
    //                     {errors.title && errors.title.type === "required" && <span>This is required</span>}
    //                      {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span> }
    //                      <textarea type= 'text' name='userCode' ref={register} placeholder='Some Code'/>
    //                     <button>Submit</button>
    //                 </form>
    //         </div>
    //     )
    // }

    // export default AddQuestions




    return (
        <div style={{ backgroundColor: "#FDF0EC" }}>
            <h1 className="addquestion-title8">Add Question</h1>
            <div className="addquestion-container8">
                <Image src={img} alt="photo" />
                <Form className="form8" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field>
                        <label>Title</label>
                        <input className="input8" name='title' ref={register({ required: true, maxLength: 50 })} placeholder='Title' />
                        {errors.title && errors.title.type === "required" && <span>This is required</span>}
                        {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span>}
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <TextArea className="input8" name='description' ref={register} placeholder='Description' />
                        {/* {errors.title && errors.title.type === "required" && <span>This is required</span>}
                        {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span>} */}
                    </Form.Field>
                    <Form.Field>
                        <label>Some Code</label>
                        <TextArea className="input8" name='userCode' ref={register} placeholder='Some Code' />

                    </Form.Field>
                    <Button className="btn8" type='submit'>Add</Button>
                </Form>
            </div>
        </div>
    )
}