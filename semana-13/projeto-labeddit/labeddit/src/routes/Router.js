import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "../screens/Login/Login"
import Cadastro from "../screens/Cadastro/Cadastro"
import Feed from "../screens/Feed/Feed"
import Posts from "../screens/Posts/Posts"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Login />
                </Route>

                <Route>
                    <Cadastro exact path="/cadastro" />
                </Route>

                <Route>
                    <Feed exact path="/feed" />
                </Route>

                <Route>
                    <Posts exact path="/posts/:id" />
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router