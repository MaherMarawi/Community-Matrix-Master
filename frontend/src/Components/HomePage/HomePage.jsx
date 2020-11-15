import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Question from './Question'

const HomePage = () => {
    const [ questions, setQuestions]= React.useState(null)
    React.useEffect(()=> {
        axios.get('http://localhost:5000/api/Getquestions')
              .then(result => setQuestions(result.data))
              .catch(err => {console.log(err)})
    },[])
    return (
        <>
        <h1 style={{textAlign:"center", fontSize: "40px"}}> Questions</h1>
        
        <div className="questions">
        {/* <div> */}
            
               {questions && questions.map(value => {
                   return (
                    <Question key={value._id} value={value} />
                       
                   )
               })}
        </div>
        </>
    )
}

export default HomePage
