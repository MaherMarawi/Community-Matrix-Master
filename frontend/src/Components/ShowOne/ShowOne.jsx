import React from 'react'
import axios from 'axios'
import GetComment from '../Comments/GetComments'
import DeleteQ from './DeleteQ'
import UserCode from '../UserCode/UserCode'

const ShowOne = (props) => {
    const [ showOneQuestion, setShowOneQuestion] = React.useState("")
    React.useEffect(()=> {
        const id = props.match.params.id
        axios.get(`http://localhost:5000/api/GetQuestion/${id}`)
        .then(result => {
            setShowOneQuestion(result.data)})
        .catch(err => {})
        },[])
    return (
        <div className="backgroundSO">
            <h1>{showOneQuestion && showOneQuestion.title}</h1>
            <h1>{showOneQuestion && showOneQuestion.description}</h1>
            <div className='userCode-question'>
                <UserCode>{showOneQuestion && showOneQuestion.userCode}</UserCode>
            </div>
            
            
                <DeleteQ id={props.match.params.id}/>
            
            <button>Update</button>
            {/* < AddComment id={showOneQuestion._id} /> */}
            < GetComment id={props.match.params.id}/>
        </div>
    )
}

export default ShowOne


