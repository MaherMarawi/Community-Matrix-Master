import React from 'react'
import axios from 'axios'


const ShowOne = (props) => {
    const [ showOneQuestion, setShowOneQuestion] = React.useState(null)
    
    React.useEffect(()=> {
        const id = props.match.params.id
        axios.get(`http://localhost:5000/api/GetQuestion/${id}`)
        .then(result => {console.log(result.data)
            setShowOneQuestion(result.data)})
        .catch(err => {console.log(err)})
        },[])
    
    return (
        <div>
            <h1>{showOneQuestion && showOneQuestion.title}</h1>
            <h1>{showOneQuestion && showOneQuestion.description}</h1>
        </div>
    )
}

export default ShowOne


