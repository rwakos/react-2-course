import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const NotFoundPage = () => (
    <div>
    NotFoundPage 404 <Link to="/">Home</Link>
    </div>
);

export default NotFoundPage;