import { Switch, Route, Router } from "react-router-dom";
import browserHistory from "./browserHistory";
import { routes, NotLoggedInRoute } from "./routing";
import { Login } from "./component";
import { Button } from '@material-ui/core'

function App() {
  return (
    // <MuiThemeProvider theme={theme}>
    // <Router history={history}>
    //   <Switch>
    //     {AllRoutes},
    //       <Route exact path="/" key="/" component={Login} />,
    //       <Route path="*" key="*">
    //       <NoMatch />
    //     </Route>
    //   </Switch>
    // </Router>
    // </MuiThemeProvider>

    <Router history={browserHistory}>
      <Switch>
        {routes},
      <NotLoggedInRoute exact path="/" key="/" component={Login} />,
      <NotLoggedInRoute
          exact
          path="/login"
          key="/login"
          component={Login}
        />
      ,
      <Route path="*" key="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

const NoMatch = () => {
  return (
    <>
      <h1>No match</h1>
      <Button variant="contained" color="primary" onClick={() => browserHistory.push("/home")} style={{
        width: '300px',
        display: 'flex',
        margin: 'auto',

      }}>
        Back
    </Button>
    </>);
};

export default App;
