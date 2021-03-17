import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './login.scss'

const LoginComponent = (props) => {
    const { handleTextChange, handleLogin, usernameError, emailError, open, handleClose } = props
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
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <MuiAlert elevation={6} variant="filled" {...props} onClose={handleClose} severity="success">
                        This is a success message!
                    </MuiAlert>;
                </Snackbar>
            </Grid>
        </form>
    )
}

export default LoginComponent;