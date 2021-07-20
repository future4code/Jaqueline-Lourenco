import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import AdmHomePage from '../pages/AdmHomePage/AdmHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import TripDetailsPage from '../pages/TripDetailPage/TripDetailsPage';


export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
                <HomePage />
            </Route>

            <Route exact path={"/adm"}>
                <AdmHomePage />
            </Route>

            <Route exact path={"/application"}>
                <ApplicationFormPage />
            </Route>

            <Route exact path={"/create"}>
                <CreateTripPage />
            </Route>

            <Route exact path={"/list"}>
                <ListTripsPage />
            </Route>

            <Route exact path={"/login"}>
                <LoginPage />
            </Route>

            <Route exact path={"/detail"}>
                <TripDetailsPage />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}


