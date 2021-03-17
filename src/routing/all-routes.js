import { Login, Blogs, Users, Drawer } from '../component';
import LoggedInRoute from "./LoggedInRoute";

const routes = [
    <LoggedInRoute
        path="/login"
        key="login"
        component={Login}
    />,
    <LoggedInRoute exact path="/blogs" key="blogs" component={Blogs} />,
    <LoggedInRoute exact path="/users" key="users" component={Users} />,
    <LoggedInRoute exact path="/home" key="home" component={Drawer} />,
];

export default routes;
