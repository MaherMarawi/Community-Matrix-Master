import React, { useState ,useEffect} from 'react'
import Axios from 'axios'

export default function HomePage() {
    const [Ques , setQues] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/question')
            .then(res=>{setQues(res.data)
                console.log(res.data)
            })
            .catch(err=>console.log(err))

    }, [])

    console.log(Ques)
    return (
        <div>
            {Ques?.map(value=>
            <div>
                    <p>{value.Ques}</p>
            </div>
            )}
        </div>
    )
}
