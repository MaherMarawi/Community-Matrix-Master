import React from 'react'
import axios from 'axios'
import AddComment from '../AddComment/AddComment'


const ShowOne = (props) => {
    const [ showOneQuestion, setShowOneQuestion] = React.useState("")
    React.useEffect(()=> {
        const id = props.match.params.id
        axios.get(`http://localhost:5000/api/GetQuestion/${id}`)
        .then(result => {console.log(result.data)
            setShowOneQuestion(result.data)})
        .catch(err => {console.log(err)})
        },[])
    return (
        <div className="backgroundSO">
            <h1>{showOneQuestion && showOneQuestion.title}</h1>
            <h1>{showOneQuestion && showOneQuestion.description}</h1>
            <h1>{showOneQuestion && showOneQuestion.description}</h1>
            
            {/* < AddComment id={showOneQuestion._id} /> */}
        </div>
    )
}

export default ShowOne


