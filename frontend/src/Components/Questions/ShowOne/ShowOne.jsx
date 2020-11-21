import React from 'react'
import axios from 'axios'
import GetComment from '../../Comments//GetComments'
import DeleteQ from './DeleteQ'
import UserCode from '../../UserCode/UserCode'
import IconLoading from '../../Auth/AuthFunc/IconLoading'
import Edit from './Edit'
import QuesEdit from './QuesEdit'
import Moment from '../../GetMoment'

const ShowOne = (props) => {
    const [ user, setUser ] = React.useState()
    const [ showOneQuestion, setShowOneQuestion] = React.useState("")
    const [ loading, setLoading ] = React.useState(true)
    const [ edit, setEdit ] = React.useState(false)
    React.useEffect(()=> {
        if (sessionStorage.getItem('User')) {
            const accesUser = JSON.parse(sessionStorage?.getItem('User'))
            setUser(accesUser)
        }
        const id = props.match.params.id
        axios.get(`http://localhost:5000/api/GetQuestion/${id}`)
        .then(result => {setLoading(false)
            setShowOneQuestion(result.data)})
        .catch( err => {setLoading(false)})
        },[showOneQuestion])
    return (
        <div className="backgroundSO">
            {!loading ? 
            <div>
            {!edit ? 
                <div className="showone-container8">
                <div>
                <Moment>{showOneQuestion && showOneQuestion.createdAt}</Moment>
                <h3 style={{color:"var(--secondary-color)", }}>{showOneQuestion && showOneQuestion.title}</h3>
                <h5>{showOneQuestion && showOneQuestion.description}</h5>
            {showOneQuestion.userCode ?  
            <div className='userCode-question'>
                <UserCode>{showOneQuestion && showOneQuestion.userCode}</UserCode>
            </div>
            : <p></p>}
                </div>
                
            <div className="choices" >
            <h4>{showOneQuestion && showOneQuestion.user_name}</h4>
                {user?.id == showOneQuestion.user_id ?
                    <div>
                        <DeleteQ props={props} />
                        <Edit edit={edit} setEdit={setEdit} />
                    </div> 
                    : ''}
            </div>
                </div>
                : <QuesEdit question={showOneQuestion} props={props} setLoading={setLoading} setQuestion={setShowOneQuestion} setEdit={setEdit} />}
            <h2 style={{marginLeft:'5%'}} >Comments:</h2>
                <div>
                <GetComment id={props.match.params.id} question_id={showOneQuestion && showOneQuestion.user_id} />
            </div>
            </div>
            : <IconLoading />}
        </div>
    )
}

export default ShowOne


