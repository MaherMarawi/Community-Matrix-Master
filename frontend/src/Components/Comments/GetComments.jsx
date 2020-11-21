import React from 'react'
import axios from 'axios'
import AddComment from './AddComment'
import UserCode from '../UserCode/UserCode'
import DeleteC from './DeleteC'
import EditC from './EditComment/EditC'
import OpenEdit from './EditComment/OpenEdit'
import IconLoading from '../Auth/AuthFunc/IconLoading'
import Moment from '../GetMoment'

const GetComment = ({ id, question_id }) => {
    const [user, setUser] = React.useState()
    const [token, setToken] = React.useState()
    const [comments, setComments] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [editComment, setEditComment] = React.useState('')
    React.useEffect(() => {
        if (localStorage.getItem('Token')) {
            const accesUser = JSON.parse(sessionStorage?.getItem('User'))
            setUser(accesUser)
            const accesstoken = localStorage?.getItem('Token')
            setToken(accesstoken)
        }
        console.log(user)
        axios.get(`http://localhost:5000/api/AllComments/${id}`)
            .then(result => {
                setLoading(false)
                console.log(result.data)
                setComments(result.data)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }, [editComment])
    return (
        <div style={{ textAlign: 'center' }}>
            {!loading ?
                <div>
                    {comments ? comments.map((value, index) => {
                        return (
                            <div key={value._id} >
                                {editComment !== index ?
                                    <React.Fragment>
                                        <div className="showone-container8 comment8" >

                                            <h3>{value.comment}</h3>
                                            <h4>{value.user_name}</h4>
                                            <h6><Moment>{value.createdAt && value.createdAt}</Moment></h6>
                                            <div>
                                                {value.userCode && value.userCode !== '' ?
                                                    <div className='userCode'>
                                                        <UserCode>{value && value.userCode}</UserCode>
                                                    </div> : <p></p>}
                                            </div>
                                            <div className="choices" >
                                                {user && user.id == value.user_id || user && user.id == question_id ?
                                                    <div>
                                                        <DeleteC comment={value} loading={loading} setLoading={setLoading} comments={comments} setComments={setComments} />
                                                    </div>
                                                    : <p></p>}
                                            </div>
                                            <div >
                                                {user && user.id == value.user_id ?
                                                    <OpenEdit setEditComment={setEditComment} index={index} />
                                                    : ''}
                                            </div>
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

            <div style={{ textAlign: "-webkit-center" }} >
                {token ?
                    < AddComment comments={comments} user={user && user} loading={loading} setLoading={setLoading} setComments={setComments} id={id} />
                    : ''}
            </div>

        </div>
    )
}
export default GetComment
