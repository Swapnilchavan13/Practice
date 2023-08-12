import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const navigate = useNavigate()
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Component /> : <navigate to="/login" replace />}
        />
    );
};

export default PrivateRoute;
