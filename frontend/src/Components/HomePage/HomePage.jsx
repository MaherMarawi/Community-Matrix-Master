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
        <h1 style={{textAlign:"center", fontSize: "40px"}}>Some Questions</h1>
        <div className="questions">
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
// import React, { Component } from 'react'
// import axios from 'axios'
// class HomePage extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              questions:[],
        
//         }
//     }
//     componentDidMount = () => {
//         axios.get('http://localhost:5000/api/Getquestions')
//             .then(result => this.setState({ questions: result.data}))
           
//             .catch(err => {console.log(err)})
//     }
//     render() {
//         const { questions} = this.state
//         return (
//             <div>
//                {questions && questions.map(value => {
//                    return (
//                        <ul key={value._id}>
//                              <li >{value.title}</li>
//                              <li>{value.description}</li>
//                        </ul>
//                    )
//                })}
//                 <h1>Home</h1>
//             </div>
//         )
//     }
// }

// export default HomePage;
