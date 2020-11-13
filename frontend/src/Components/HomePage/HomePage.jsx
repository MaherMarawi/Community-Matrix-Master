import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const HomePage = () => {
    const [ questions, setQuestions]= React.useState(null)
    React.useEffect(()=> {
        axios.get('http://localhost:5000/api/Getquestions')
              .then(result => setQuestions(result.data))
              .catch(err => {console.log(err)})
    },[])
    return (
        <div>
            <Link to='/AddQuestions'>Ask New Question</Link>
               {questions && questions.map(value => {
                   return (
                       <ul key={value._id}>
                             <li >{value.title}</li>
                             <li>{value.description}</li>
                             <Link to={`/Show/${value._id}`}>See More</Link>
                       </ul>
                   )
               })}
        </div>
    )
}

export default HomePage
