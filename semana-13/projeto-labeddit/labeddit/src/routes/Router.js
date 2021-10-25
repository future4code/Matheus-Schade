import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "../screens/Login/Login"
import Cadastro from "../screens/Cadastro/Cadastro"
import Feed from "../screens/Feed/Feed"
import Posts from "../screens/Posts/Posts"
import Header from "../components/Header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path="/">
                    <Login />
                </Route>

                <Route exact path="/cadastro" >
                    <Cadastro />
                </Route>

                <Route exact path="/feed" >
                    <Feed />
                </Route>

                <Route exact path="/posts/:id" >
                    <Posts />
                </Route>

                <Route>
                    <Login />
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router