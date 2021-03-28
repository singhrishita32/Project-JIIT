import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import SignupT from './teacher/SignupT'
import SigninT from './teacher/SigninT'
import SignupS from './student/SignupS'
import SigninS from './student/SigninS'
import Menu from './core/Menu'
import AdminDashboard from './admin/AdminDashboard'
import DashboardT from './teacher/DashboardT'
import MentorRole from './teacher/MentorRole'
import MentorGroup from './teacher/MentorGroup'
const MainRouter = () => {
    return (
        <div>

            <Menu></Menu>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/signupT" component={SignupT}></Route>
                <Route exact path="/signinT" component={SigninT}></Route>
                <Route exact path="/signupS" component={SignupS}></Route>
                <Route exact path="/signinS" component={SigninS}></Route>
                <Route exact path="/group/new" component={AdminDashboard}></Route>
                <Route exact path="/mentorrole" component={MentorRole}></Route>
                <Route exact path="/DashboardT" component={DashboardT}></Route>
                <Route exact path="/mentor/:groupId/details" component={MentorGroup}></Route>
            </Switch>
        </div>
    );
};

export default MainRouter;