import React from 'react'
import {Link, withRouter} from 'react-router-dom'
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
        { isAuthenticatedS() && (
            < div className="navbar">
                <ul className = "navbar-nav navbar-nav ">
                    <li className = "nav-item">
                            <Link className = "nav-link" style={isActive(history, `/DashboardS`)} to="/DashboardS">Dashboard</Link>
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