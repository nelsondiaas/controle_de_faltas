import React, {useEffect, useState} from 'react'
import Api from '../../services/Api'

import logout from '../../routes/logout'


export default () => {
    const [user, setUser] = useState({})

    async function getUser() {
        const token = localStorage.getItem('@user/token');
        const userId = localStorage.getItem('@user/id');
        
        const header = {headers: {'Authorization': `Bearer ${token}`}}
        const {data} = await Api.get(`/students/${userId}`, header)
        setUser(data)
    }

    useEffect(() => {
        getUser();
    }, [])
    


    return (<>
        <li>
            <div className="user-view">
                <div className="center">
                    <i className="large material-icons">account_circle</i>
                    <h6 className="center">{user.name}</h6>
                </div>
            </div>
        </li>
        <li className="mt-4"><a href="#!">Aluas</a></li>
        <li><a href="#!">Minhas presenças</a></li>
        <li><a href="#!">Material</a></li>
        <li><a href="#!">Configuração</a></li>
        <li><a href="#!" onClick={() => {logout()}}>Sair</a></li>
    </>)
}