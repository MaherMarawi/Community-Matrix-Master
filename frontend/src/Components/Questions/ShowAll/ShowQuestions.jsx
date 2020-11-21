import React from 'react'
import axios from 'axios'
import Question from './Question'
import IconLoading from '../../Auth/AuthFunc/IconLoading'
import { Placeholder } from 'semantic-ui-react'
const HomePage = () => {
    const [ questions, setQuestions]= React.useState(null)
    const [ loading, setLoading ] = React.useState(true);
    React.useEffect(()=> {
        axios.get('http://localhost:5000/api/GetQuestions')
              .then(result => {
                setLoading(false)
                setQuestions(result.data)})
              .catch(err => {
                setLoading(false)
                console.log(err)})
    },[])
    return (
        <>
        <h1 style={{textAlign:"center", fontSize: "40px"}}>Questions</h1>
        
        <div className="questions">
            {!loading ? 
                <React.Fragment>
                    {questions && questions.map(value => {
                        return (
                        <Question key={value._id} value={value} />
                            
                        )
                    })}
                </React.Fragment>
                : <div style={{marginLeft: '115%', marginTop: '30%'}} >
                    <IconLoading />
                </div> }
        </div>
        </>
    )
}

export default HomePage
