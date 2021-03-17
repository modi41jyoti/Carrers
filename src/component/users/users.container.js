import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UsersComponent from './users.component'

const Users = () => {

    const [response, setResponse] = useState([])

    useEffect(() => {
        const getData = async () => {
            var data = await axios.get('https://jsonplaceholder.typicode.com/users')
            setResponse(data.data)

        }
        getData()
    }, [])

    return <UsersComponent response={response} />
}

export default Users;
