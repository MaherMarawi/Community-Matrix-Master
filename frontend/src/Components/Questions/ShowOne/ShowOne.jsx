import React from 'react'
import axios from 'axios'
import GetComment from '../../Comments//GetComments'
import DeleteQ from './DeleteQ'
import UserCode from '../../UserCode/UserCode'
import IconLoading from '../../Auth/AuthFunc/IconLoading'

const ShowOne = (props) => {
    const [ user, setUser ] = React.useState()
    const [ showOneQuestion, setShowOneQuestion] = React.useState("")
    const [ loading, setLoading ] = React.useState(true)
    React.useEffect(()=> {
        console.log(JSON.parse(sessionStorage?.getItem('User')))
        if (sessionStorage.getItem('User')) {
            const accesUser = JSON.parse(sessionStorage?.getItem('User'))
            setUser(accesUser)
        }
        const id = props.match.params.id
        axios.get(`http://localhost:5000/api/GetQuestion/${id}`)
        .then(result => {setLoading(false)
            setShowOneQuestion(result.data)})
        .catch(err => {setLoading(false)})
        },[])
    return (
        <div className="backgroundSO">
            {!loading ? 
            <div>
            <h4>{showOneQuestion && showOneQuestion.user_name}</h4>
            <h1>{showOneQuestion && showOneQuestion.title}</h1>
            <h1>{showOneQuestion && showOneQuestion.description}</h1>
            {showOneQuestion.userCode ?  
            <div className='userCode-question'>
                <UserCode>{showOneQuestion && showOneQuestion.userCode}</UserCode>
            </div>
            : <p></p>}
            <div>
                {user?.id == showOneQuestion.user_id ?
                    <div>
                        <DeleteQ id={props.match.params.id}/>
                        <button>Update</button>
                    </div> 
                     : ''}
            </div>
            <div>
                <GetComment id={props.match.params.id} question_id={showOneQuestion.user_id} />
            </div>
            </div>
            : <IconLoading />}
        </div>
    )
}

export default ShowOne


