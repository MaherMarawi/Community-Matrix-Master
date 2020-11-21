import React from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react';
function QuesEdit({setEdit, question, setQuestion, setLoading, props }) {
    const [ oldTitle, setOldTitle ] = React.useState(question.title)
    const [ oldDescription, setOldDescription ] = React.useState(question.description)
    const [ oldUserCode, setOldUserCode ] = React.useState(question.userCode && question.userCode)
    const [ validTitle, setValidTitle ] = React.useState('')
    const [ validDescription, setValidDescription ] = React.useState('')
    const onTitle = (e) => setOldTitle(e.target.value)
    const onDescription = (e) => setOldDescription(e.target.value)
    const onUserCode = (e) => setOldUserCode(e.target.value)
    const onClose = () => {
        console.log(props, question._id)
        setEdit(false)}
    const onClick = () => {
        if (oldTitle == '') {setValidTitle('this field is required')} else setValidTitle('')
        if (oldDescription == '') {setValidDescription('this field is required')} else setValidDescription('')
        if (oldTitle && oldDescription !== '') {
            setLoading(true)
            const newQuestion = {title: oldTitle, description: oldDescription, userCode: oldUserCode}
            axios.put(`http://localhost:5000/api/EditQuestion/${question._id}`, newQuestion)
            .then( result => {setQuestion(newQuestion)
                
                setLoading(false)
                props.history.push(`/Show/${question._id}`)
                setEdit(false)
                console.log(result.data)})
            .catch( err => {setLoading(false)
                console.log(err)})
        }
    }
    return (
        // <div className="form8" style={{margin:"50px auto"}} >
        //     <input className="input8" value={oldTitle} onChange={onTitle} type='text' />
        //     <p>{validTitle && validTitle}</p>
        //     <textarea name='description' className="input8" rows="3" value={oldDescription} onChange={onDescription} type='text' />
        //     <p>{validDescription && validDescription}</p>
        //     <textarea className="input8" name='userCode' value={oldUserCode} onChange={onUserCode} type='text' />
        //     <button className="btn8" onClick={onClick} >edit</button>
        //     <button className="btn8" onClick={onClose} >close</button>
        // </div>
        <Form className="form8" style={{margin:"50px auto"}} >
            <Form.Field>
                <label>Title</label>
                <input className="input8" value={oldTitle} onChange={onTitle} type='text' />
                <p>{validTitle && validTitle}</p>
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <textarea name='description' className="input8" rows="3" value={oldDescription} onChange={onDescription} type='text' />
                <p>{validDescription && validDescription}</p>
            </Form.Field>
            <Form.Field>
                <label>Some Code</label>
                <textarea className="input8" name='userCode' value={oldUserCode} onChange={onUserCode} type='text' />
            </Form.Field>
            <Button className="btn8" onClick={onClick}>Edit</Button>
            <Button className="btn8" onClick={onClose}>Close</Button>
        </Form>
    )
}

export default QuesEdit
