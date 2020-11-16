import React from 'react'
import axios from 'axios'
import AddComment from './AddComment'
import UserCode from '../UserCode/UserCode'
import DeleteC from './DeleteC'
import EditC from './EditC'
const GetComment = ({ id }) => {
    const [comments, setComments] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [editComment, setEditComment] = React.useState('')

    React.useEffect(() => {
        axios.get(`http://localhost:5000/api/AllComments/${id}`)
            .then(result => setComments(result.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div style={{ textAlign: 'center' }}>
            {comments ? comments.map(value => {
                return ( 
                    
                    
                    <React.Fragment>
                        <div style={{ display: 'flex', marginLeft: '10%' }} >
                            <div>
                                <h2>{value.comment}</h2>
                            </div>
                            <div style={{ marginLeft: '60%' }} >
                                <DeleteC comment={value} loading={loading} setLoading={setLoading} comments={comments} setComments={setComments} />
                            </div>
                        </div>


                        {value.userCode !== '' ?
                            <div className='userCode'>
                                <UserCode>{value && value.userCode}</UserCode>
                            </div>
                            : <p></p>}

                    </React.Fragment>
                )

            }) 
            :
             <h1>No Comments</h1>}
            < AddComment comments={comments} loading={loading} setLoading={setLoading} setComments={setComments} id={id} />
        </div>
    )
}

export default GetComment
