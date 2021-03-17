import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoginComponent from './login.component'
import browserHistory from "../../browserHistory";
import _ from 'lodash'


const Login = () => {

    const [response, setResponse] = useState([])
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('')

    useEffect(() => {
        const x = async () => {
            var data = await axios.get('https://jsonplaceholder.typicode.com/users')
            setResponse(data.data)
        }
        x()

    }, [])

    const handleLogin = () => {
        console.log(email, username)
        username === '' && setUsernameError("Please enter password")
        email === '' && setEmailError("Please enter email")

        var x = response.find(item => item.email === email);
        var logedInUserDetail = JSON.stringify({ email: email, password: username })
        x != undefined && x.username === username
            && localStorage.setItem("logedInUser", logedInUserDetail) && browserHistory.push('/home')


    }

    const handleTextChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'email') {
            var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (mailformat.test(value)) {
                var x = response.filter((item) => {
                    return item.email === value
                })
                x.length > 0 && setEmail(x[0].email)
                setEmailError("")
            } else {
                setEmailError("Email should me like abc@abc.abc")
            }
        }
        if (name === 'password') {
            var x = response.filter((item) => {
                return item.username === value
            })

            x.length > 0 ? (setUsername(x[0].username) && setUsernameError("") && console.log(x[0].username)) : (setUsernameError("Please enter correct password") && console.log(x[0].username))

        }


    }

    return <LoginComponent
        handleTextChange={handleTextChange}
        handleLogin={handleLogin}
        emailError={emailError}
        usernameError={usernameError}
    />
}

export default Login;

