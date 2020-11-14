import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const AddQuestions = (props) => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => {  axios.post('http://localhost:5000/api/AddQuestion',data )
    .then(result => {console.log(result)
      props.history.push('/')
    })

    .catch(err => {console.log(err)})
   }
  
    return (
        <div>
             <Link to='/'>See All Questions</Link>
                <form style={{margin:10 + '%'}} onSubmit={handleSubmit(onSubmit)}>
                    <input type= 'text' name='title' ref={register({ required: true, maxLength: 5 })}  placeholder='Type your question'/><br/>
                    {errors.title && errors.title.type === "required" && <span>This is required</span>}
                     {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span> }
                    <textarea type= 'text' name='description' ref={register} placeholder='Add a description'/><br/>
                    {errors.title && errors.title.type === "required" && <span>This is required</span>}
                     {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span> }
                    <button>Submit</button>
                </form>
        </div>
    )
}

export default AddQuestions

