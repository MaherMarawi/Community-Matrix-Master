import React from 'react'
import axios from 'axios'
import AddComment from './AddComment'
import UserCode from '../UserCode/UserCode'
import DeleteC from './DeleteC'
import EditC from './EditComment/EditC'
import OpenEdit from './EditComment/OpenEdit'
import IconLoading from '../Auth/AuthFunc/IconLoading'


const GetComment = ({ id, question_id }) => {
    const [user, setUser] = React.useState()
    const [token, setToken] = React.useState()
    const [comments, setComments] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [editComment, setEditComment] = React.useState('')
    React.useEffect(() => {
        console.log(id)
        if (localStorage.getItem('Token')) {
            const accesUser = JSON.parse(sessionStorage?.getItem('User'))
            setUser(accesUser)
            const accesstoken = localStorage?.getItem('Token')
            setToken(accesstoken)
        }
        console.log(user)
        axios.get(`http://localhost:5000/api/AllComments/${id}`)
            .then(result => {setLoading(false)
                console.log(result.data)
                setComments(result.data)
            })
            .catch(err => {setLoading(false)
                console.log(err)})
    }, [])
    return (
        <div style={{ textAlign: 'center' }}>
        {!loading ? 
            <div>
                {comments ? comments.map((value, index) => {
                    return (
                        <div key={value._id} >
                            {editComment !== index ?
                                <React.Fragment>
                                    <div style={{ display: 'flex', marginLeft: '10%' }} >
                                        
                                        <h2>{value.comment}</h2>
                                        <h4>{value.user_name}</h4>
                                        <div>
                                            {user && user.id == value.user_id || user && user.id == question_id   ?
                                            <div style={{ marginLeft: '60%' }} >
                                                <DeleteC comment={value} loading={loading} setLoading={setLoading} comments={comments} setComments={setComments} />
                                                
                                                
                                            </div>
                                            
                                            : <p></p>}

                                        </div>
                                        <div>
                                            

                                        </div>
                                                <div>
                                                {user && user.id == value.user_id  ?
                                                    <OpenEdit setEditComment={setEditComment} index={index} /> 
                                                    : ''}
                                                </div>
                                        
                                    </div>
                                    <div>
                                        {value.userCode && value.userCode !== '' ?
                                         <div className='userCode'>
                                        <UserCode>{value && value.userCode}</UserCode>
                                        </div> : <p></p>}
                                    </div>
                                    

                                </React.Fragment>
                                :
                                <div>
                                    
                                        <EditC comment={value} index={index} editComment={editComment} setEditComment={setEditComment} loading={loading} setLoading={setLoading} comments={comments} setComments={setComments} />
                                        
                                </div>

                            }
                        </div>
                    )
                })
                    : <h1>No Comments</h1>
            }
            </div>
            : <IconLoading />}

            <div>
                {token ?
                    < AddComment comments={comments} user={user && user} loading={loading} setLoading={setLoading} setComments={setComments} id={id} />
                    : ''}
            </div>

        </div>
    )
}
export default GetComment
