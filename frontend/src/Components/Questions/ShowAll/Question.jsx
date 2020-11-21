import React from 'react'
import { Link } from "react-router-dom";
import GetMoment from '../../GetMoment'

const Question = (props) => {
    return (
        <div className="question-container8" style={{ backgroundColor: 'white', boxShadow: '1px 2px 12px #fff7f5'}} >
            <div className="card-header8" >
                <i className="fas fa-user-tie fa-3x icon8" ></i>
                <div >
                    <div className="name8">{props.value.user_name}</div>
                    <div className="buttons8">
                        <span className="category8">Web Design</span>
                        <span className="depart8">Markting</span>
                        {/* <span className="more8">More +</span> */}
                        <Link to={`/Show/${props.value._id}`} className="more8">More +</Link>
                    </div>
                </div>
            </div>
            <div style={{fontSize:"20px" , color:"orange"}}>{props.value.title}</div>
            <div style={{color:"black"}} className="description8"><p>{props.value.description}</p></div>
            <div className="buttons8">
                <GetMoment>{props.value && props.value.createdAt}</GetMoment>
            </div>
        </div>
    )
}

export default Question
