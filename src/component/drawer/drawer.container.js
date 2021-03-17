import React from 'react'
import DrawerComponent from './drawer.component'
import browserHistory from "../../browserHistory";


const Drawer = () => {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        localStorage.setItem('logedInUser', JSON.stringify({}))
        browserHistory.push("/login")
    }
    return <DrawerComponent open={open} handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleLogout={handleLogout}
    />
}

export default Drawer;