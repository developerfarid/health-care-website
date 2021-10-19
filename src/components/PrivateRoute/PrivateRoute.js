import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useAuth()
    if (isLoding) {
        return (<Spinner  animation="border" className="text-center m-auto" role="status">
        <span  className="visually-hidden">Loading...</span>
      </Spinner>)
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;