
import { Switch, Route, BrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import Login from "../pages/Login/Login"
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm"
import { AdminHome } from "../pages/AdminHome/AdminHome"
import { CreateTrip } from "../pages/CreateTrip/CreateTrip"
import { TripDetails } from "../pages/TripDetails/TripDetails"
import {Detail} from "../pages/Detail/Detail"

export const Router = () => {
    return (
        <div>

            <BrowserRouter>
                <Switch>

                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/list-trip">
                        <ListTripsPage />
                    </Route>

                    <Route exact path="/list-trip/applicationform/:id">
                        <ApplicationForm />
                    </Route>

                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/admin">
                        <AdminHome />
                    </Route>

                    <Route exact path="/admin/create-trip">
                        <CreateTrip />
                    </Route>

                    <Route exact path="/admin/trips-detail">
                        <TripDetails />
                    </Route>

                    <Route exact path="/admin/trips-detail/:id">
                        <Detail />
                    </Route>

                </Switch>
            </BrowserRouter>

        </div >
    )
}

