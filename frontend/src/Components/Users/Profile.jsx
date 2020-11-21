import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Profile(props) {
    const[ info, setInfo ] = useState(null)
    const[ done, setDone ] = useState(true)
    const[ numb, setNumb ] = useState(0)
    const [ userAccounts, setUserAccounts ] = useState([])
    const [ removeAccounts, setRemoveAccounts ] = useState([])
    const [ account, setAccount ] = useState()
    useEffect(() => {
        const id = props.match.params.id
        axios.get(`http://localhost:5000/api/getUser/${id}`)
            .then( res => {
                setInfo(res.data)
                setDone(false)
                setUserAccounts(res && res?.data && res?.data?.accounts)
            })
            .catch( err => console.log(err))
        return() => {
            setDone(true)
            setNumb(0)
        }
    },[numb])
    const onAccounts = (e) => {
        setAccount(e.target.value)
    }
    const onAddAccount = () => {
        setUserAccounts([...userAccounts, account])
        setAccount('')

    }
    const onDelete = (account) => {
        const arr = userAccounts && userAccounts.filter(value => value !== account)
        setUserAccounts(arr)
        console.log(arr)
    }
    const onClick = () => {
        const allInfo = info
        allInfo.accounts = userAccounts
        setInfo(allInfo)
        axios.put(`http://localhost:5000/api/updateUser/${props.match.params.id}`,info)
            .then( res => {
                setNumb(numb +1)
                setInfo(null)
                props.history.push('/users')
            })
            .catch( err => console.log(err))
    }
    const onChange = (e) => {
        setInfo({...info,[e.target.name]: e.target.value})
    }
    return (
        <div className="backGroundPR">
        {!done ? 
            <React.Fragment>
            <h1 className="titleCO">Information</h1>
                <h1 className="EmailhPR">{info?.email && info?.email}</h1><br></br><hr className="hrPR" />
                <label className="labelPR">username :</label><div className="divPR"><input className="inputPR" type='text' onChange={onChange} name='username'  value={info?.username} /></div><br></br>
                <label className="labelPR">phone number :</label><div className="divPR"><input className="inputPR"  name='phoneNumber' onChange={onChange} value={info?.phoneNumber && info?.phoneNumber}  /></div><br></br>
                <label className="labelPR">programming languages :</label><div className="divPR"><input className="inputPR"  name='langs' onChange={onChange} value={info?.langs && info?.langs} /></div><br></br><br />
                <p className="labelPR AccPR">Accounts :</p>
                <div className="addAcc">{userAccounts && userAccounts?.map((account, index) => <div><div className="deletePR" onClick={() => onDelete(account)} >{account && account} <button className="DeletePR">Delete</button> </div><br /></div>)}</div>
                <input className="inputPR ext" type='text' value={account} onChange={onAccounts} />
                <button className="btnPR" onClick={onAddAccount} >add</button><br></br>
            </React.Fragment>
             : <p>loading...</p>}
             <button className="btn2PR" disabled={done} onClick={() => onClick()} >{done ? 'loading...' : 'Submit All'}</button>
        </div>
    )
}
export default Profile

