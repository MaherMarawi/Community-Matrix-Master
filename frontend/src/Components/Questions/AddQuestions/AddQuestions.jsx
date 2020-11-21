
import { useForm } from 'react-hook-form'
import axios from 'axios'
import React from 'react';
import img from '../../../img/3.png';
import { Button, Form} from 'semantic-ui-react';

export default function AddQuestions(props) {
    const [ user, setUser ] = React.useState(null)
    React.useEffect(() => {
        const token = localStorage.getItem('Token')
        const userToken = JSON.parse(sessionStorage.getItem('User'))
        setUser(userToken)
        console.log(user)
        if(!token) props.history.push('/Auth/LogIn')
    }, [])
    const { register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        data.user_id = user.id
        data.user_name = user.username
        console.log(data)
            axios.post('http://localhost:5000/api/AddQuestion', data)
            .then(result => {props.history.push('/community')
            })
            .catch(err => { console.log(err) })
    }
    return (
        <React.Fragment>
        <div >
        <h1 className="addquestion-title8">Add Question</h1>
        <div className="addquestion-container8">
            <img src={img} alt="photo" />
            {/* <form className="form8" onSubmit={handleSubmit(onSubmit)}>                       
                        <input type='text' name='title' className="input8" ref={register({ required: true, maxLength: 25 })} placeholder='Type your question' />
                        {errors.title && errors.title.type === "required" && <span>This is required</span>}
                        {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span>}
                        <br />
                        <textarea type='text' name='description' className="input8" ref={register({ required: true })} placeholder='Add a description' ></textarea>
                        {errors.description && errors.description.type === "required" && <span>This is required</span>}
                        <br />
                        <textarea type='text' name='userCode' className="input8" ref={register} placeholder='Some Code'></textarea>
                        <button className="btn8">Add</button>
                    </form> */}
            <Form className="form8" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Title</label>
                    <input className="input8" name='title' ref={register({ required: true, maxLength: 25 })} placeholder='Title' />
                    {errors.title && errors.title.type === "required" && <span>This is required</span>}
                    {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span>}
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <textarea name='description' className="input8" rows="3" ref={register({ required: true })} placeholder='Add a description' ></textarea>
                    {errors.description && errors.description.type === "required" && <span>This is required</span>}
                </Form.Field>
                <Form.Field>
                    <label>Some Code</label>
                    <textarea className="input8" name='userCode' ref={register} placeholder='Some Code' />
                </Form.Field>
                <Button className="btn8" >Add</Button>
            </Form>

        </div>
    </div>
        </React.Fragment>
        
    )
}