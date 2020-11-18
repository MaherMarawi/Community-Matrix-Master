import React from "react";
import axios from "axios";
import IconLoading from '../Auth/AuthFunc/IconLoading'
export default function Users() {
    const [ users, setUsers ] = React.useState([]);
    const [ loading, setLoading ] = React.useState(true);
    React.useEffect(() => {
        axios.get(`http://localhost:5000/api/getUsers`)
            .then((result) => {
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
                            <div className='oneUser' >
                                <ul className="btnUS">
                                <h2 style={{}} key={value.id}><b style={{color:"#E76F51"}}>User name: </b> {value.username}</h2>
                                <h3><b style={{color:"#E76F51"}} >Email:  </b>{value.email}</h3>
                                </ul>
                            </div>
                        )
                    })}
                </React.Fragment>
            
            : <div style={{marginLeft: '75%', marginTop: '30%'}} ><IconLoading /></div>}
        </div>
    );
}