import React, { Component } from 'react'
import axios from 'axios'

class AddComment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment:[],
            question_id: this.props.id
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    onClick = (e)=> {
        e.preventDefault();
        let data ={
            comment: this.state.comment,
        }
        axios.post(`http://localhost:5000/api/AddComment/${this.state.question_id}`,data )
             .then(result => console.log(result))
             .catch(err => {console.log(err)})
             // this.props.history.push('/add-comment')
    }
    render() {
        const { comment } = this.state
        return (
            <div>
                   <form style={{margin:10 + '%'}}>
                    <input type= 'text' name='comment' onChange={this.onChange} value={comment}  placeholder='Add a comment'/><br/>
                    <button onClick={this.onClick}>Submit</button>
                   
                </form>
            </div>
        )
    }
}

export default AddComment