import React from 'react'
import { Typography } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import browserHistory from "../../browserHistory";
import Drawer from '../drawer/drawer.container'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),

    },

    textField: {
        width: '60ch',
    },
}));

const BlogsComponent = (props) => {
    const { response, handleClick } = props
    const classes = useStyles();
    return (
        <>
            <Drawer />
            <Button variant="contained" color="primary" onClick={() => browserHistory.push("/home")} style={{
                // width: '300px',
                display: 'flex',
                // margin: 'auto',

            }}>
                Back
            </Button>
            <Typography variant='h4' style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>Blogs</Typography>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{
                margin: 'auto',
                display: 'flex',
                marginBottom: '40px'
            }}>
                <FilledInput
                    endAdornment={<InputAdornment position="end">{<SearchIcon />}</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
            </FormControl>
            <ul>
                {response.map((item) => {
                    return (
                        <>
                            <li key={item.id} style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }} onClick={() => handleClick(item.id)}>{item.body}</li>
                            <hr />
                        </>
                    )
                })}
            </ul>


        </>
    )


}

export default BlogsComponent