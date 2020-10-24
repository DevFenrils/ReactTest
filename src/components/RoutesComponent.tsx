import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";
import ClientsComponent from "./ClientsComponent";
import ProductsComponent from "./ProductsComponent";
import App from '../App';
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import React from "react";

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={LoginComponent}/>
        <Route path="home" component={HomeComponent}/>
        <Route path="clients" component={ClientsComponent}/>
        <Route path="products" component={ProductsComponent}/>

    </Route>
);

export default routes;