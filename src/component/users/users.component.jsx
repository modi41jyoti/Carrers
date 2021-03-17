import React from 'react'
import { Typography, Button } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import browserHistory from "../../browserHistory";
import Drawer from '../drawer/drawer.container'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),

    },

    textField: {
        width: '60ch',
    },
}));

const UsersComponent = (props) => {
    const { response } = props
    const classes = useStyles();
    return (
        <>
            <Drawer />
            <Typography variant='h4' style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>Users</Typography>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{
                margin: 'auto',
                display: 'flex'
            }}>
                <FilledInput
                    endAdornment={<InputAdornment position="end">{<SearchIcon />}</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
            </FormControl>

            {response.map((item) => {
                return <Typography style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', margin: '10px' }}>{item.username}</Typography>
            })}
            <Button variant="contained" color="primary" onClick={() => browserHistory.push("/home")} style={{
                width: '300px',
                display: 'flex',
                margin: 'auto',

            }}>
                Back
            </Button>

        </>
    )


}

export default UsersComponent