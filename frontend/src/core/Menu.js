import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { signoutT, isAuthenticatedT } from '../Auth/Teacher'
import '../teacher/styles.css'


const isActive = (history, path) => {
    if(history.location.pathname === path)
        return {color: "#000000"}
    else
        return {color: "#009999"}
}

const Menu = ({history}) => (
    <div>
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
    </div>
                
)


export default withRouter(Menu);