import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { signoutT, isAuthenticatedT } from '../Auth/Teacher'
import '../teacher/styles.css'
import {signoutS,isAuthenticatedS} from '../Auth/Student'

const isActive = (history, path) => {
    if(history.location.pathname === path)
        return {color: "#000000"}
    else
        return {color: "#009999"}
}

const Menu = ({history}) => (
    <div>
        {/* teacher */}
        { isAuthenticatedT() && (
            < div className="navbar">
                <ul className = "navbar-nav navbar-nav ">
                        <li className = "nav-item">
                            <Link className = "nav-link" style={isActive(history, `/DashboardT`)} to="/DashboardT">Dashboard</Link>
                        </li>
                    </ul>
                    <ul className = "navbar-nav navbar-nav ml-auto">
                        <li className = "nav-item" >
                            <Link className = "nav-link" style={isActive(history, "/signoutT")} to="/" onClick={() => signoutT(()=>history.push("/"))}>SignOut</Link>
                        </li>
                    </ul>
            </div>
        
        )}
        {/* student */}

        { isAuthenticatedS() && (
            < div className="navbar">
                <ul className = "navbar-nav navbar-nav ">
                        <li className = "nav-item">
                            {isAuthenticatedS().student.name}'s Dashboard
                        </li>
                    </ul>
                    <ul className = "navbar-nav navbar-nav ml-auto">
                        <li className = "nav-item" >
                            <Link className = "nav-link" style={isActive(history, "/signoutS")} to="/" onClick={() => signoutS(()=>history.push("/"))}>SignOut</Link>
                        </li>
                    </ul>
            </div>
        
        )}
    </div>
                
)


export default withRouter(Menu);