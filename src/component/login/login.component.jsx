import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core'
import './login.scss'

const LoginComponent = (props) => {
    const { handleTextChange, handleLogin, usernameError, emailError } = props
    return (
        <form className='form' noValidate autoComplete="off">
            <Grid xs={12}>
                <TextField className='emailTextField'
                    label="Email"
                    name='email'
                    variant="outlined"
                    onChange={handleTextChange}
                    autoFocus
                    required
                    {...(emailError && { error: true, helperText: emailError })}
                />
            </Grid>
            <Grid xs={12}>
                <TextField className='emailTextField'
                    label="Password"
                    name='password'
                    variant="outlined"
                    onChange={handleTextChange}
                    {...(usernameError && { error: true, helperText: usernameError })}
                    required
                />
            </Grid>
            <Grid xs={12} className='loginButton'>
                <Button variant="contained" color="primary" size='large' onClick={handleLogin}>
                    LogIn
            </Button>
            </Grid>
        </form>
    )
}

export default LoginComponent;