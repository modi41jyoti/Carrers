import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './drawer.style'
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'
import browserHistory from "../../browserHistory";



const DrawerComponent = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { open, handleDrawerClose, handleDrawerOpen, handleLogout } = props


    return (
        <div className={classes.root}>
            <CssBaseline />
            <Grid container>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Jyoti Modi
                    </Typography>
                        <Button variant="contained" onClick={handleLogout} style={{
                            display: 'flex',
                            left: '70%'

                        }}>
                            Logout
            </Button>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key='Users' onClick={() => browserHistory.push("/users")}>
                        <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                        <ListItemText primary='Users' />
                    </ListItem>
                    <ListItem button key='Blogs' onClick={() => browserHistory.push("/blogs")}>
                        <ListItemIcon>{<MailIcon />}</ListItemIcon>
                        <ListItemText primary='Blogs' />
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div >
    );
}

export default DrawerComponent