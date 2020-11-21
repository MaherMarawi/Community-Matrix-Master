import React from "react";
import axios from "axios";
import IconLoading from '../Auth/AuthFunc/IconLoading'
import { Link } from "react-router-dom";
export default function Users() {
    const [ users, setUsers ] = React.useState([]);
    const [ loading, setLoading ] = React.useState(true);
    const [ user, setUser ] = React.useState()
    React.useEffect(() => {
        if (sessionStorage.getItem('User')) {
            const accesUser = JSON.parse(sessionStorage?.getItem('User'))
            setUser(accesUser)
        }
        axios.get(`http://localhost:5000/api/getUsers`)
            .then((result) => {console.log(result.data)
                setUsers(result.data);
                setLoading(false);
            })
            .catch((err) => { setLoading(false) });
    }, []);
    return (
        <div className="backGroundUS">
            {!loading ? 
                <React.Fragment>
                    {users && users.map(value => {
                        return(
                            <div key={value._id} className='oneUser' >
                                <div className="btnUS">
                                <h2 style={{border: user?.id == value._id ? '5px solid red' : 'none'}} key={value.id}><b style={{color:"#E76F51"}}>User name: </b> {value.username}</h2>
                                <h3><b style={{color:"#E76F51"}} >Email:  </b>{value.email}</h3>
                                {value.phoneNumber && value.phoneNumber ? 
                                    <h3><b style={{color:"#E76F51"}} >phone number:  </b>{value.phoneNumber}</h3> : '' }
                                    {value.langs && value.langs ? 
                                        <h3><b style={{color:"#E76F51"}} >langs :  </b>{value.langs}</h3> : '' }
                                {value.accounts && value.accounts.map(account => <h3>Account: <a href={account && account} target='_BLANK' >{account && account}</a></h3>)}

                                </div>
                            </div >
                        )
                    })}
                </React.Fragment>
            
            : <div style={{marginLeft: '80%', marginTop: '40%'}} ><IconLoading /></div>}
        </div>
    );
}